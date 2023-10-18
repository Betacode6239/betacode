import React, { useContext } from 'react'
import Logo from '../Logo'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from '../../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/router'
import { menuList } from './navMenu'
import { nanoid } from 'nanoid'
import { MobileMenuContext } from '@/lib/context/mobile-menu/MobileMenuContext'
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import MobileMenuDrawer from './MobileMenuDrawer'
import WhatsappIcon from '@/components/icons/WhatsappIcon'
import WhatsappButton from '../WhatsappButton'


const DesktopMenuNavLink = ({ href, children, ...props }: any) => {
    const router = useRouter();
    const isActive = router.asPath === href;
    return (
        <Link href={href || ''} passHref legacyBehavior {...props}>
            <NavigationMenuLink
                className={cn([
                    navigationMenuTriggerStyle(),
                    'data-[active]:text-primary data-[active]:bg-primary/20'
                ])}
                active={isActive}
            >
                {children}
            </NavigationMenuLink>
        </Link>
    )
}





const DesktopMenu = () => {

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {
                    menuList.map(link => {
                        return (
                            <NavigationMenuItem key={nanoid()}>
                                {
                                    link.child ?
                                        <>
                                            <NavigationMenuTrigger>{link.lable}</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                {
                                                    Array.isArray(link.child) ?
                                                        link.child.map(l => {
                                                            return <DesktopMenuNavLink href={l.href} >{l.lable}</DesktopMenuNavLink>
                                                        })
                                                        :
                                                        link.child
                                                }
                                            </NavigationMenuContent>
                                        </> :
                                        <>
                                            <DesktopMenuNavLink href={link.href} >{link.lable}</DesktopMenuNavLink>
                                        </>
                                }
                            </NavigationMenuItem>
                        )
                    })
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const DasktopNavbar = () => {
    const { drawerOpen, setDrawerOpen } = useContext(MobileMenuContext);
    return (
        <nav className='fixed top-0 w-full px-5 z-50'>
            <div className='container mx-auto px-2 py-2 rounded-lg bg-white flex items-center justify-between mt-2 shadow shadow-primary'>
                <div className="">
                    <Logo />
                </div>
                <div className='hidden md:block'><DesktopMenu /></div>
                <div >
                    <Button className='md:hidden' size={'sm'} onClick={() => setDrawerOpen(!drawerOpen)}>
                        {
                            drawerOpen ? <Cross2Icon /> : <HamburgerMenuIcon />
                        }
                    </Button>

                    <div className='hidden md:block'>
                        <WhatsappButton />
                    </div>
                </div>
            </div>
            <MobileMenuDrawer />
        </nav>
    )
}

export default DasktopNavbar