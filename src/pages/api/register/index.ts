import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient()

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const body = req.body
    const {username, password} = body

    if (req.method !== "POST") {
        return res.json("Method not allowed.")
    }
    try {
        const existingAccount = await prisma.account.findUnique({
            where: { username },
        });

        if (existingAccount) {
            return res.status(409).json({ ok:false, message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const createdAccount = await prisma.account.create({
            data: {
                username: username,
                password: hashedPassword,
            },
        });

        return res.status(201).json({
            ok: true,
            message: "Account created successfully.",
            username: createdAccount.username,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
