import { z } from "zod";

export const ContactSchema = z.object({
    phone: z.string(),
    email: z.string(),
    address: z.object({
        addr: z.string(),
        city: z.string(),
        pincode: z.number(),
        country: z.string()
    })
})

export const CreateGeneralSettingSchema = z.object({
    logo: z.string().optional(),
    contact: ContactSchema.optional() 
})

export const UpdateGeneralSettingSchema = z.object({
    id: z.number()
}).merge(CreateGeneralSettingSchema);
