import {PropsWithChildren, createContext, useEffect, useState} from 'react'
import { useWindowSize } from "@uidotdev/usehooks";

export type MobileMenuContextProps = {
    drawerOpen: boolean,
    setDrawerOpen: (value: boolean) => void
}

export const MobileMenuContext = createContext<MobileMenuContextProps>({} as MobileMenuContextProps);


export const MobileMenuContextProvider  = (props: PropsWithChildren) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

  
    return (
        <MobileMenuContext.Provider value={{drawerOpen, setDrawerOpen}}>
            {props.children}
        </MobileMenuContext.Provider>
    )
}