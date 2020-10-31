import { Request, Response } from "express";

/**
 * Controller for manage contact info
 */
export class ContactController {

    static sendContactInfo = async (req: Request, res: Response) => {

        try {
            console.log(req.body);
            res.send('Send');

        } catch (error) {
            res.status(400).send({ message: 'Service not available' })
        }
    };
}

export default ContactController;