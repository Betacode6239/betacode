import React, { PropsWithChildren } from 'react'
import DesktopNavbar from '../shared/Menu/DasktopNavbar';
import Footer from '../shared/Footer';
import PopupModal from '../popup/PopupModal';

const DefaultLayout = (props: PropsWithChildren) => {
  return (
    <>
    <PopupModal/>
      <div>
        <DesktopNavbar />
      </div>
      {props.children}
      <Footer />
    </>
  )
}

export default DefaultLayout