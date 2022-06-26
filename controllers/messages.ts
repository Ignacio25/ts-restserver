import { Request, Response } from "express";
import { Twilio } from "twilio";

export const sendWhatsapp = async( req: Request, res: Response) => {

    const { body } = req;

    //Realizar validacion
    const msg = body.msg;
    const from = `whatsapp:${body.from}`;
    const to = `whatsapp:${body.to}`;

    const client = new Twilio( process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!);
    const respMsg = await client.messages .create({ body: msg, from, to });
    res.json( respMsg)
}