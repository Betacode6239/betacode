import { useRouter } from 'next/router'
import React, { PropsWithChildren } from 'react'
import AdminLayout from './AdminLayout';
import DefaultLayout from './DefaultLayout';
import TwakToWidget from '../widgets/TawktoWidget';

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();


  if (router.asPath.startsWith('/admin')) {
    return <AdminLayout>{children}</AdminLayout>
  }

  return (
    <>
      <TwakToWidget/>
      <DefaultLayout>{children}</DefaultLayout>
    </>
  )
}

export default Layout