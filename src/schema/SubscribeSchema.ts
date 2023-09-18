import { z } from "zod";
import { WithPagination } from "./helpers/WithPagination";
import { WithSearch } from "./helpers/WithSearch";
import { WithSorting } from "./helpers/WithSorting";

export const CreateSubscribeSchema = z.object({
    email: z.string().email()
})
export const UpdateSubscribeSchema = z.object({
    id: z.number()
}).merge(CreateSubscribeSchema);

export const DeleteSubscriberSchema = z.object({
    id: z.number()
})

export const DeleteManySubscribersSchema = z.object({
    ids: z.array(z.number()).default([])
})

export const GetSubscriberByIdSchema = z.object({
    id: z.number()
})

export const PaginateSubscriberListSchema = WithPagination
                                        .merge(WithSearch)
                                        .merge(WithSorting)

export type PaginateEnquiryListInput = z.TypeOf<typeof PaginateSubscriberListSchema>;

export type CreateSubscribeInput = z.TypeOf<typeof CreateSubscribeSchema>;