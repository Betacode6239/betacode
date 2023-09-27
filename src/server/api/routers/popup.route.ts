import { z } from "zod";
import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "@////////server/api/trpc";
import { CreatePopupSchema, DeletePopupSchema, ListPopupSchema, PopupData, UpdatePopupSchema } from "@/schema/PopupSchema";
import { Prisma } from "@prisma/client";
import { paginate } from "@/utils/utils";

export const PopupRouter = createTRPCRouter({
    create: protectedProcedure.input(CreatePopupSchema).mutation(async ({ ctx, input }) => {
        return await ctx.prisma.popup.create({
            data: input
        }) as PopupData;
    }),
    update: protectedProcedure.input(UpdatePopupSchema).mutation(async ({ ctx, input }) => {
        const {id, ...rest} = input;
        return await ctx.prisma.popup.update({
            where: {id},
            data: rest
        }) as PopupData;
    }),
    delete: protectedProcedure.input(DeletePopupSchema).mutation(async ({ctx, input}) => {
        const {id} = input;
        return await ctx.prisma.popup.delete({
            where:{id}
        }) as PopupData;
    }),

    getAll: publicProcedure.input(ListPopupSchema).query(async ({ctx, input}) => {
        const query: Prisma.PopupFindManyArgs = {
            orderBy: input.sortBy || {order: 'asc'}
        }
        return await paginate<PopupData, Prisma.PopupFindManyArgs>(
            ctx.prisma.popup,
            query,
            input.pagination
        )
    })
});
