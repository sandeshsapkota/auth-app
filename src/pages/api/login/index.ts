import {PrismaClient} from "@prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient()

export default async function handler(req:any, res:any) {
    const body = req.body
    const {username, password} = body

    if (req.method !== "POST") {
        return res.json("Method not allowed.")
    }

    if (!username || !password) {
        return res.status(400).json({ok: false, message: "Username and password are required."});
    }

    try {
        const account = await prisma.account.findUnique({
            where: {username},
        });

        if (!account) {
            return res.status(403).json({ok: false, message: "User name or password incorrect."});
        }

        bcrypt.compare(password, account.password, function (err: any, result: any) {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ok: false, message: "Internal server error"});
            } else {
                if (result === true) {
                    const secretKey:string|undefined = process.env.SECRET_KEY;
                    if(secretKey){
                        const token = jwt.sign({username: account.username}, secretKey);
                        return res.json({ok: true, message: "Login successful.", token});
                    }else{
                        return res.status(500).json({ok: false, message: "Internal server error"});
                    }
                } else {
                    res.status(403).json({ok: false, message: 'User name or password incorrect.'});
                }
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Internal server error'});
    }
}
