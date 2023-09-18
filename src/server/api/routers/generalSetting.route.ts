import { CreateGeneralSettingSchema, UpdateGeneralSettingSchema } from "@/schema/GeneralSetting";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const GeneralSettingRouter = createTRPCRouter({
    create: protectedProcedure.input(CreateGeneralSettingSchema).mutation(async ({ctx, input}) => {
        const alreadyExists = await ctx.prisma.generalSetting.findFirst();
        if(!alreadyExists){
            return await ctx.prisma.generalSetting.create({data: input})
        }

        return await ctx.prisma.enquiry.update({
            where: {id: alreadyExists.id},
            data: {...alreadyExists, ...input}
        })
    }),


    update: protectedProcedure.input(UpdateGeneralSettingSchema).mutation(async ({ctx, input}) => {
        const {id, ...rest} = input;

        return await ctx.prisma.generalSetting.update({
            where: {id},
            data: rest
        })
    })
})