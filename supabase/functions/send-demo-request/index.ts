import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface DemoRequestPayload {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, company, email, phone, message }: DemoRequestPayload = await req.json();

    console.log("Received demo request from:", name, email);

    // Validate required fields
    if (!name || !company || !email) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Name, Klinik und E-Mail sind erforderlich." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to Zentras team
    const notificationResponse = await resend.emails.send({
      from: "ZENTRAS Systems <noreply@zentras-systems.com>",
      to: ["kontakt@zentras-systems.com"],
      subject: `Neue Demo-Anfrage von ${name} (${company})`,
      html: `
        <h1>Neue Demo-Anfrage</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Klinik/Organisation:</strong> ${company}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Nicht angegeben"}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message || "Keine Nachricht"}</p>
        <hr>
        <p><small>Diese Anfrage wurde über das Kontaktformular auf zentras-systems.com gesendet.</small></p>
      `,
    });

    console.log("Notification email sent:", notificationResponse);

    // Send confirmation email to the requester
    const confirmationResponse = await resend.emails.send({
      from: "ZENTRAS Systems <noreply@zentras-systems.com>",
      to: [email],
      subject: "Ihre Demo-Anfrage bei ZENTRAS Systems",
      html: `
        <h1>Vielen Dank für Ihre Anfrage, ${name}!</h1>
        <p>Wir haben Ihre Demo-Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.</p>
        <h2>Ihre Angaben:</h2>
        <ul>
          <li><strong>Klinik/Organisation:</strong> ${company}</li>
          <li><strong>E-Mail:</strong> ${email}</li>
          ${phone ? `<li><strong>Telefon:</strong> ${phone}</li>` : ""}
        </ul>
        ${message ? `<p><strong>Ihre Nachricht:</strong><br>${message}</p>` : ""}
        <hr>
        <p>Mit freundlichen Grüßen,<br>Ihr ZENTRAS Systems Team</p>
        <p><small>ZENTRAS Systems UG | Pater-Prinz-Weg 9, 50997 Köln | kontakt@zentras-systems.com</small></p>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Demo-Anfrage erfolgreich gesendet" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-demo-request function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Ein Fehler ist aufgetreten" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
