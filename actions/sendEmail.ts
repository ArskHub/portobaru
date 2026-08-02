"use server";

import { TFormSchema } from "@/app/contact/page";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "ardisudarmika94@gmail.com";

export async function sendEmail(values: TFormSchema) {
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY belum di-set di environment variable.");
    return false;
  }

  const resend = new Resend(RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    reply_to: values.email,
    to: [CONTACT_EMAIL],
    subject: `Pesan baru dari ${values.name} — ardee.dev`,
    text: `Nama    : ${values.name}\nEmail   : ${values.email}\n\nPesan:\n${values.message}`,
  });

  if (error) {
    console.error("Gagal mengirim email:", error);
    return false;
  }

  return data !== null;
}
