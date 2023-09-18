import { paginate } from '@/utils/utils';
import { CreateEnquirySchema, DeleteEnquirySchema, DeleteManyEnquirySchema, GetEnquiryByIdSchema, PaginateEnquiryListSchema, UpdateEnquirySchema } from './../../../schema/EnquirySchema';
import { createTRPCRouter, protectedProcedure, publicProcedure } from './../trpc';
import { TRPCError } from '@trpc/server';
import { Enquiry, Prisma, Subscriber } from '@prisma/client';
import { CreateSubscribeSchema, DeleteManySubscribersSchema, DeleteSubscriberSchema, GetSubscriberByIdSchema, PaginateSubscriberListSchema, UpdateSubscribeSchema } from '@/schema/SubscribeSchema';


export const SubscriberRouter = createTRPCRouter({
    create: publicProcedure.input(CreateSubscribeSchema).mutation(async ({ctx, input}) =>{
        const isAlreadySubmitted = await ctx.prisma.subscriber.findFirst({
            where: {
                email: input.email,
            }
        });

        if(isAlreadySubmitted){
            throw new TRPCError({message: 'You already subscribed', code: 'BAD_REQUEST'})
        }

        const createdEnquiry = await ctx.prisma.subscriber.create({
            data: input
        })

        return createdEnquiry;
    }),

    update: protectedProcedure.input(UpdateSubscribeSchema).mutation(async ({ctx, input}) => {
        const {id, ...rest} = input;
        return await ctx.prisma.subscriber.update({
            where: {id},
            data: rest
        })
    }),

    delete: protectedProcedure.input(DeleteSubscriberSchema).mutation(async ({ctx, input}) => {
        return await ctx.prisma.subscriber.delete({where: {id: input.id}})
    }),

    deleteMany: protectedProcedure.input(DeleteManySubscribersSchema).mutation(async ({ctx, input}) => {
        return await ctx.prisma.$transaction(input.ids.map(id => {
            return ctx.prisma.subscriber.delete({
                where: {
                    id
                }
            })
        }))
    }),


    getById: publicProcedure.input(GetSubscriberByIdSchema).query(async ({ctx, input}) => {
        return await ctx.prisma.subscriber.findFirst({where: {id: input.id}})
    }),

    paginatedList: publicProcedure.input(PaginateSubscriberListSchema).query(async ({ctx, input}) => {
        const query: Prisma.SubscriberFindManyArgs = {
            where: {
                AND: (input.search && input.search !== '') ? {
                    OR: [
                        {email: {contains: input.search, mode: 'insensitive'}},
                    ]
                } : undefined
            }
        }
        return await paginate<Subscriber, Prisma.SubscriberFindManyArgs>(
            ctx.prisma.subscriber,
            query,
            input.pagination
        )
    })
})