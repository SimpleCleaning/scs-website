import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type QuoteRequestBody = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  customerType?: unknown;
  company?: unknown;
  address?: unknown;
  postalCode?: unknown;
  city?: unknown;
  services?: unknown;
  additionalInformation?: unknown;
  privacyAccepted?: unknown;
};

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const normalizedPhone = phone.replace(/[\s()+.-]/g, "");
  return /^\d{8,15}$/.test(normalizedPhone);
}

function getServices(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((service): service is string => typeof service === "string")
    .map((service) => service.trim())
    .filter(Boolean);
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY ontbreekt.");

      return NextResponse.json(
        {
          success: false,
          message:
            "De e-mailservice is nog niet correct ingesteld. Probeer het later opnieuw.",
        },
        { status: 500 },
      );
    }

    let body: QuoteRequestBody;

    try {
      body = (await request.json()) as QuoteRequestBody;
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "De verzonden formuliergegevens zijn ongeldig.",
        },
        { status: 400 },
      );
    }

    const name = getString(body.name);
    const phone = getString(body.phone);
    const email = getString(body.email);
    const customerType = getString(body.customerType);
    const company = getString(body.company);
    const address = getString(body.address);
    const postalCode = getString(body.postalCode);
    const city = getString(body.city);
    const additionalInformation = getString(body.additionalInformation);
    const services = getServices(body.services);
    const privacyAccepted = body.privacyAccepted === true;

    if (
      !name ||
      !phone ||
      !email ||
      !customerType ||
      !address ||
      !postalCode ||
      !city
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Vul alle verplichte velden in.",
        },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Vul een geldig e-mailadres in.",
        },
        { status: 400 },
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Vul een geldig telefoonnummer in.",
        },
        { status: 400 },
      );
    }

    if (!["Particulier", "Zakelijk"].includes(customerType)) {
      return NextResponse.json(
        {
          success: false,
          message: "Selecteer een geldig type klant.",
        },
        { status: 400 },
      );
    }

    if (customerType === "Zakelijk" && !company) {
      return NextResponse.json(
        {
          success: false,
          message: "Vul de bedrijfsnaam in.",
        },
        { status: 400 },
      );
    }

    if (services.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Selecteer minimaal één gewenste werkzaamheid.",
        },
        { status: 400 },
      );
    }

    if (!privacyAccepted) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Je moet akkoord gaan met de verwerking van je gegevens.",
        },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeCustomerType = escapeHtml(customerType);
    const safeCompany = escapeHtml(company);
    const safeAddress = escapeHtml(address);
    const safePostalCode = escapeHtml(postalCode);
    const safeCity = escapeHtml(city);
    const safeAdditionalInformation = escapeHtml(additionalInformation);

    const servicesHtml = services
      .map(
        (service) => `
          <li style="margin-bottom: 8px;">
            ${escapeHtml(service)}
          </li>
        `,
      )
      .join("");

    const submittedAt = new Intl.DateTimeFormat("nl-NL", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Europe/Amsterdam",
    }).format(new Date());

    const { data, error } = await resend.emails.send({
      from: "Simple Cleaning Service <info@scs.care>",
      to: ["info@scs.care"],
      replyTo: email,
      subject: `Nieuwe offerteaanvraag van ${name}`,
      html: `
        <!doctype html>
        <html lang="nl">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Nieuwe offerteaanvraag</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f1f5f9;
              font-family: Arial, Helvetica, sans-serif;
              color: #0f172a;
            "
          >
            <div style="padding: 32px 16px;">
              <div
                style="
                  max-width: 680px;
                  margin: 0 auto;
                  overflow: hidden;
                  border: 1px solid #e2e8f0;
                  border-radius: 20px;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    padding: 30px;
                    background-color: #0284c7;
                    color: #ffffff;
                  "
                >
                  <p
                    style="
                      margin: 0 0 8px;
                      font-size: 13px;
                      font-weight: 700;
                      letter-spacing: 1.5px;
                      text-transform: uppercase;
                    "
                  >
                    Simple Cleaning Service
                  </p>

                  <h1
                    style="
                      margin: 0;
                      font-size: 28px;
                      line-height: 1.25;
                    "
                  >
                    Nieuwe offerteaanvraag
                  </h1>

                  <p
                    style="
                      margin: 12px 0 0;
                      color: #e0f2fe;
                      line-height: 1.6;
                    "
                  >
                    Er is een nieuwe aanvraag via scs.care ontvangen.
                  </p>
                </div>

                <div style="padding: 30px;">
                  <h2
                    style="
                      margin: 0 0 18px;
                      font-size: 20px;
                      color: #0f172a;
                    "
                  >
                    Contactgegevens
                  </h2>

                  <table
                    role="presentation"
                    style="
                      width: 100%;
                      border-collapse: collapse;
                      font-size: 15px;
                    "
                  >
                    <tr>
                      <td
                        style="
                          width: 170px;
                          padding: 10px 12px 10px 0;
                          border-bottom: 1px solid #e2e8f0;
                          font-weight: 700;
                          vertical-align: top;
                        "
                      >
                        Naam
                      </td>
                      <td
                        style="
                          padding: 10px 0;
                          border-bottom: 1px solid #e2e8f0;
                        "
                      >
                        ${safeName}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding: 10px 12px 10px 0;
                          border-bottom: 1px solid #e2e8f0;
                          font-weight: 700;
                          vertical-align: top;
                        "
                      >
                        Telefoon
                      </td>
                      <td
                        style="
                          padding: 10px 0;
                          border-bottom: 1px solid #e2e8f0;
                        "
                      >
                        <a
                          href="tel:${safePhone}"
                          style="color: #0284c7; text-decoration: none;"
                        >
                          ${safePhone}
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding: 10px 12px 10px 0;
                          border-bottom: 1px solid #e2e8f0;
                          font-weight: 700;
                          vertical-align: top;
                        "
                      >
                        E-mailadres
                      </td>
                      <td
                        style="
                          padding: 10px 0;
                          border-bottom: 1px solid #e2e8f0;
                        "
                      >
                        <a
                          href="mailto:${safeEmail}"
                          style="color: #0284c7; text-decoration: none;"
                        >
                          ${safeEmail}
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding: 10px 12px 10px 0;
                          border-bottom: 1px solid #e2e8f0;
                          font-weight: 700;
                          vertical-align: top;
                        "
                      >
                        Type klant
                      </td>
                      <td
                        style="
                          padding: 10px 0;
                          border-bottom: 1px solid #e2e8f0;
                        "
                      >
                        ${safeCustomerType}
                      </td>
                    </tr>

                    ${
                      customerType === "Zakelijk"
                        ? `
                          <tr>
                            <td
                              style="
                                padding: 10px 12px 10px 0;
                                border-bottom: 1px solid #e2e8f0;
                                font-weight: 700;
                                vertical-align: top;
                              "
                            >
                              Bedrijfsnaam
                            </td>
                            <td
                              style="
                                padding: 10px 0;
                                border-bottom: 1px solid #e2e8f0;
                              "
                            >
                              ${safeCompany}
                            </td>
                          </tr>
                        `
                        : ""
                    }

                    <tr>
                      <td
                        style="
                          padding: 10px 12px 10px 0;
                          border-bottom: 1px solid #e2e8f0;
                          font-weight: 700;
                          vertical-align: top;
                        "
                      >
                        Adres
                      </td>
                      <td
                        style="
                          padding: 10px 0;
                          border-bottom: 1px solid #e2e8f0;
                        "
                      >
                        ${safeAddress}<br />
                        ${safePostalCode} ${safeCity}
                      </td>
                    </tr>
                  </table>

                  <h2
                    style="
                      margin: 32px 0 14px;
                      font-size: 20px;
                      color: #0f172a;
                    "
                  >
                    Gewenste werkzaamheden
                  </h2>

                  <div
                    style="
                      padding: 18px 20px;
                      border-radius: 14px;
                      background-color: #f0f9ff;
                      color: #0f172a;
                    "
                  >
                    <ul style="margin: 0; padding-left: 20px;">
                      ${servicesHtml}
                    </ul>
                  </div>

                  <h2
                    style="
                      margin: 32px 0 14px;
                      font-size: 20px;
                      color: #0f172a;
                    "
                  >
                    Aanvullende informatie
                  </h2>

                  <div
                    style="
                      min-height: 50px;
                      padding: 18px 20px;
                      border: 1px solid #e2e8f0;
                      border-radius: 14px;
                      background-color: #f8fafc;
                      line-height: 1.7;
                      white-space: pre-wrap;
                    "
                  >${
                    safeAdditionalInformation ||
                    "De klant heeft geen aanvullende informatie ingevuld."
                  }</div>

                  <div
                    style="
                      margin-top: 30px;
                      padding: 18px 20px;
                      border-radius: 14px;
                      background-color: #0f172a;
                      color: #ffffff;
                    "
                  >
                    <p style="margin: 0 0 8px; font-weight: 700;">
                      Snel reageren
                    </p>

                    <p
                      style="
                        margin: 0;
                        color: #cbd5e1;
                        font-size: 14px;
                        line-height: 1.6;
                      "
                    >
                      Beantwoord deze e-mail om direct naar ${safeName} te
                      reageren. Het antwoordadres is automatisch ingesteld op
                      ${safeEmail}.
                    </p>
                  </div>

                  <p
                    style="
                      margin: 26px 0 0;
                      color: #64748b;
                      font-size: 12px;
                      line-height: 1.6;
                    "
                  >
                    Ontvangen op ${escapeHtml(submittedAt)} via het
                    offerteformulier op scs.care.
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nieuwe offerteaanvraag via scs.care

CONTACTGEGEVENS
Naam: ${name}
Telefoon: ${phone}
E-mailadres: ${email}
Type klant: ${customerType}
${customerType === "Zakelijk" ? `Bedrijfsnaam: ${company}\n` : ""}Adres: ${address}
Postcode en plaats: ${postalCode} ${city}

GEWENSTE WERKZAAMHEDEN
${services.map((service) => `- ${service}`).join("\n")}

AANVULLENDE INFORMATIE
${additionalInformation || "Geen aanvullende informatie ingevuld."}

Ontvangen op ${submittedAt}.
      `.trim(),
    });

    if (error) {
      console.error("Resend-fout:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "De offerteaanvraag kon niet worden verstuurd. Probeer het later opnieuw.",
        },
        { status: 502 },
      );
    }

    const confirmationServicesHtml = services
      .map(
        (service) => `
          <li style="margin-bottom: 8px;">
            ${escapeHtml(service)}
          </li>
        `,
      )
      .join("");

    const {
      data: confirmationData,
      error: confirmationError,
    } = await resend.emails.send({
      from: "Simple Cleaning Service <info@scs.care>",
      to: [email],
      replyTo: "info@scs.care",
      subject: "Wij hebben je offerteaanvraag ontvangen",
      html: `
        <!doctype html>
        <html lang="nl">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Offerteaanvraag ontvangen</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f1f5f9;
              font-family: Arial, Helvetica, sans-serif;
              color: #0f172a;
            "
          >
            <div style="padding: 32px 16px;">
              <div
                style="
                  max-width: 680px;
                  margin: 0 auto;
                  overflow: hidden;
                  border: 1px solid #e2e8f0;
                  border-radius: 20px;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    padding: 30px;
                    background-color: #0284c7;
                    color: #ffffff;
                  "
                >
                  <p
                    style="
                      margin: 0 0 8px;
                      font-size: 13px;
                      font-weight: 700;
                      letter-spacing: 1.5px;
                      text-transform: uppercase;
                    "
                  >
                    Simple Cleaning Service
                  </p>

                  <h1
                    style="
                      margin: 0;
                      font-size: 28px;
                      line-height: 1.25;
                    "
                  >
                    Bedankt voor je aanvraag
                  </h1>

                  <p
                    style="
                      margin: 12px 0 0;
                      color: #e0f2fe;
                      line-height: 1.6;
                    "
                  >
                    We hebben je offerteaanvraag goed ontvangen.
                  </p>
                </div>

                <div style="padding: 30px;">
                  <p style="margin: 0; line-height: 1.7;">
                    Beste ${safeName},
                  </p>

                  <p style="margin: 18px 0 0; line-height: 1.7;">
                    Bedankt voor je offerteaanvraag bij Simple Cleaning
                    Service. We bekijken je aanvraag en nemen zo snel mogelijk
                    persoonlijk contact met je op.
                  </p>

                  <h2
                    style="
                      margin: 32px 0 14px;
                      font-size: 20px;
                      color: #0f172a;
                    "
                  >
                    Jouw geselecteerde werkzaamheden
                  </h2>

                  <div
                    style="
                      padding: 18px 20px;
                      border-radius: 14px;
                      background-color: #f0f9ff;
                      color: #0f172a;
                    "
                  >
                    <ul style="margin: 0; padding-left: 20px;">
                      ${confirmationServicesHtml}
                    </ul>
                  </div>

                  <div
                    style="
                      margin-top: 30px;
                      padding: 20px;
                      border-radius: 14px;
                      background-color: #0f172a;
                      color: #ffffff;
                    "
                  >
                    <p style="margin: 0 0 10px; font-weight: 700;">
                      Heb je in de tussentijd een vraag?
                    </p>

                    <p
                      style="
                        margin: 0;
                        color: #cbd5e1;
                        line-height: 1.8;
                      "
                    >
                      Telefoon:
                      <a
                        href="tel:+31619909034"
                        style="color: #7dd3fc; text-decoration: none;"
                      >
                        06 19909034
                      </a>
                      <br />
                      E-mail:
                      <a
                        href="mailto:info@scs.care"
                        style="color: #7dd3fc; text-decoration: none;"
                      >
                        info@scs.care
                      </a>
                    </p>
                  </div>

                  <p style="margin: 28px 0 0; line-height: 1.7;">
                    Met vriendelijke groet,<br />
                    <strong>Simple Cleaning Service</strong>
                  </p>

                  <p
                    style="
                      margin: 26px 0 0;
                      color: #64748b;
                      font-size: 12px;
                      line-height: 1.6;
                    "
                  >
                    Deze bevestiging is automatisch verstuurd naar
                    ${safeEmail}.
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Beste ${name},

Bedankt voor je offerteaanvraag bij Simple Cleaning Service.

We hebben je aanvraag goed ontvangen en nemen zo snel mogelijk persoonlijk contact met je op.

JOUW GESELECTEERDE WERKZAAMHEDEN
${services.map((service) => `- ${service}`).join("\n")}

Heb je in de tussentijd een vraag?

Telefoon: 06 19909034
E-mail: info@scs.care

Met vriendelijke groet,

Simple Cleaning Service
      `.trim(),
    });

    if (confirmationError) {
      console.error(
        "Bevestigingsmail naar klant kon niet worden verstuurd:",
        confirmationError,
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Bedankt! Je offerteaanvraag is succesvol verstuurd. We nemen zo snel mogelijk contact met je op.",
        emailId: data?.id,
        confirmationEmailId: confirmationData?.id ?? null,
        confirmationEmailSent: !confirmationError,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Onverwachte fout bij offerteaanvraag:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Er is onverwacht iets misgegaan. Probeer het later opnieuw.",
      },
      { status: 500 },
    );
  }
}