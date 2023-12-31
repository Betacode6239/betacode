import { string, z } from "zod";
import { WithPagination } from "./helpers/WithPagination";
import { WithSearch } from "./helpers/WithSearch";
import { WithSorting } from "./helpers/WithSorting";

export const EnquiryTypesArray = [
    'GENERAL',
    'SOFTWARE',
    'API',
    'SERVICE'
]

export const EnquiryTypeEnumSchema = z.enum([
    'GENERAL',
    'SOFTWARE',
    'API',
    'SERVICE'
])

export type EnquiryTypes = z.TypeOf<typeof EnquiryTypeEnumSchema>;

export const GeneralEnquirySchema = z.object({
    subject: z.string(),
    message: z.string().optional()
})

export const SoftwareEnquirySchema = z.object({
    productName: z.string(),
    message: z.string(),
})

export const ApiEnquirySchema = z.object({
    apiName:z.string(),
    message: z.string().optional()
})
export const ServiceEnquirySchema = z.object({
    service:z.string(),
    phone: z.string().optional(),
    message: z.string().optional()
})

export const EnquiryFilterSchema = z.object({
    type: EnquiryTypeEnumSchema.optional(),
})

export const CreateEnquirySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    type: EnquiryTypeEnumSchema,
    content: GeneralEnquirySchema
            .or(SoftwareEnquirySchema)
            .or(ApiEnquirySchema)
})

export type CreateEnquiryInput = z.TypeOf<typeof CreateEnquirySchema>;


export const UpdateEnquirySchema = z.object({
    id: z.number()
}).merge(CreateEnquirySchema)

export type UpdateEnquiryInput = z.TypeOf<typeof UpdateEnquirySchema>;


export const DeleteEnquirySchema = z.object({
    id: z.number()
})


export const DeleteManyEnquirySchema = z.object({
    ids: z.array(z.number()).default([])
})

export const GetEnquiryByIdSchema = z.object({
    id: z.number()
})

export const PaginateEnquiryListSchema = WithPagination
                                        .merge(EnquiryFilterSchema)
                                        .merge(WithSearch)
                                        .merge(WithSorting)

export type PaginateEnquiryListInput = z.TypeOf<typeof PaginateEnquiryListSchema>;

