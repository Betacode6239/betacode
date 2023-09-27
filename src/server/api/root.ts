import { exampleRouter } from "@////////server/api/routers/example";
import { createTRPCRouter } from "@////////server/api/trpc";
import { EnquiryRouter } from "./routers/enquiry.route";
import { GeneralSettingRouter } from "./routers/generalSetting.route";
import { SettingRouter } from "./routers/setting.route";
import { SubscriberRouter } from "./routers/subscriber.route";
import { PopupRouter } from "./routers/popup.route";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  enquiry: EnquiryRouter,
  setting: SettingRouter,
  subscriber: SubscriberRouter,
  popup: PopupRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
