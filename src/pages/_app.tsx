import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import { Toaster } from "@/components/ui/toaster"
import "@/styles/globals.css";
import '@/styles/codeEditorTheme.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-modern-drawer/dist/index.css'
import 'animate.css';
import Layout from "@/components/layout/Layout";
import { MobileMenuContextProvider } from "@/lib/context/mobile-menu/MobileMenuContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MobileMenuContextProvider>
        <Toaster />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MobileMenuContextProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
