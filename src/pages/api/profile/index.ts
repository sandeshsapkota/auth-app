import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
    // Check if the request has a valid authorization token
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorized. Missing or invalid token." });
    }

    const token = authHeader.split(' ')[1];

    const secretKey:string|undefined = process.env.SECRET_KEY;
    let decodedToken:any;
    try {
        // Verify and decode the JWT token
        if(secretKey) {
            decodedToken = jwt.verify(token, secretKey); // Replace 'your-secret-key' with the same secret key used during login.
        }else {
            return res.status(500).json({ ok:false, message: "Error while fetching profile." });
        }
    } catch (err) {
        return res.status(401).json({ ok:false, message: "Unauthorized. Invalid token." });
    }

    const username = decodedToken.username;

    try {
        const account = await prisma.account.findUnique({
            where: { username },
            select: {
                id: true,
                username: true,
            },
        });

        if (!account) {
            return res.status(404).json({ message: "User not found." });
        }

        return res.status(200).json({ ok:true, profile: account });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
