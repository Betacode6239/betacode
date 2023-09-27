import { z } from "zod";
import { WithPagination } from "./helpers/WithPagination";
import { WithSorting } from "./helpers/WithSorting";
import { WithSearch } from "./helpers/WithSearch";

const PopuContentSchema = z.object({
    image: z.object({
        publicUrl: z.string(),
        path: z.string()
    }).optional(),
    href: z.string().optional(),
})


export const CreatePopupSchema = z.object({
    content: z.object({
        image: z.object({
            publicUrl: z.string(),
            path: z.string()
        }).optional(),
        href: z.string().optional(),
    }),
    enabled: z.boolean().optional()
})


export const UpdatePopupSchema = z.object({
    id: z.number()
}).merge(CreatePopupSchema)


export const DeletePopupSchema = z.object({
    id: z.number()
})

export const ListPopupSchema = WithPagination
    .merge(WithSorting)
    .merge(WithSearch)


export const GetById = z.object({
    id: z.number()
})


export type PopupData = {
    id: number,
    order: number,
    content: z.infer<typeof PopuContentSchema>,
    createdAt: Date,
    updatedAt: Date
}

export type CreatePopupInput = z.infer<typeof CreatePopupSchema>;
export type UpdatePopupInput = z.infer<typeof UpdatePopupSchema>;
export type DeletePopupInput = z.infer<typeof DeletePopupSchema>;
export type ListPopupInput = z.infer<typeof ListPopupSchema>;