import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    subject: z.string(),
    message: z.string().optional()
})

export type ContactInput = z.TypeOf<typeof ContactSchema>;