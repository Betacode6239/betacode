import { MobileMenuContext } from '@/lib/context/mobile-menu/MobileMenuContext'
import 'react-modern-drawer/dist/index.css'
import Drawer from 'react-modern-drawer'
import React, { useContext } from 'react'
import MobileMenu from './MobileMenu'
import { menuArray } from './navMenu'

const MobileMenuDrawer = () => {
    const { drawerOpen, setDrawerOpen } = useContext(MobileMenuContext);
    return (
        <Drawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            direction='left'
        >
            <MobileMenu menu={menuArray} />
        </Drawer>
    )
}

export default MobileMenuDrawer