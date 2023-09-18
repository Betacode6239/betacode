import { CreateSettingSchema, GetSettingByType, UpdateSettingSchema } from "@/schema/settingSchema";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const SettingRouter = createTRPCRouter({
    create: protectedProcedure.input(CreateSettingSchema).mutation(async ({ctx, input}) => {

        const alreadyExists = await ctx.prisma.setting.findFirst({
            where: {
                type: input.type
            }
        });
        
        if(alreadyExists){
            return await ctx.prisma.setting.update({
                where: {type: input.type},
                data: {
                    value: input.value,
                    lable: input.lable
                }
            })
        }

        return await ctx.prisma.setting.create({
            data: input
        })
    }),


    update: protectedProcedure.input(UpdateSettingSchema).mutation(async ({ctx, input}) => {
        const {id} = input;

        return await ctx.prisma.setting.update({
            where: {id},
            data: input
        })
    }),

    get: publicProcedure.input(GetSettingByType).query(async ({ctx, input}) => {
        return await ctx.prisma.setting.findFirst({
            where: {type: input.type}
        })
    })
})