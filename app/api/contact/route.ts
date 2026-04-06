import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev", // default dari Resend
      to: "geogel921@gmail.com", //
      subject: "Pesan dari Contact Form",
      html: `
        <h3>Pesan Baru</h3>
        <p><b>Nama:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Pesan:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false });
  }
}