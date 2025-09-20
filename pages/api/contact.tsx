// 

import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { name, email, message } = req.body; // 👈 get user input

        const { data, error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["dynechristelle01@gmail.com"], // your inbox
        subject: `New message from ${name} (${email})`, // 👈 shows who sent it
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
        });

        if (error) return res.status(400).json(error);

        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
