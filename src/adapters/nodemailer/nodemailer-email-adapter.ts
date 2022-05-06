import nodemailer from "nodemailer";

import { MailAdapter, SendMailDate } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f1a5b47a587a40",
    pass: "450da829315c32",
  },
});

export class NodemailMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailDate) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Neander de Souza <mcspipoca47@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
