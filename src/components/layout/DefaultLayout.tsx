import React, { PropsWithChildren } from 'react'
import DesktopNavbar from '../shared/Menu/DasktopNavbar';
import Footer from '../shared/Footer';

const DefaultLayout = (props: PropsWithChildren) => {
  return (
    <>
      <div>
        <DesktopNavbar />
      </div>
      {props.children}
      <Footer />
    </>
  )
}

export default DefaultLayout