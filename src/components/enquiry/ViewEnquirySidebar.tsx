import React, { ReactElement, ReactNode, useState } from 'react'
import Drawer from 'react-modern-drawer'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Enquiry } from '@prisma/client'
import { Button } from '../ui/button'

const ViewEnquirySidebar = ({
    enquiry,
    children
}: {
    enquiry: Enquiry,
    children?: (state: boolean, toggleDrawer: () => void) => ReactNode
}) => {
    const [show, setShow] = useState<boolean>(false);

    const toggleDrawer = () => {
        setShow(prev => !prev)
    }

    return (
        <>
            {
                children ?
                children(show, toggleDrawer)
                : <Button variant={'outline'} onClick={toggleDrawer}>View Enquiry</Button>
            }
            <Drawer
                open={show}
                onClose={toggleDrawer}
                direction='right'
                className=''
            >
                <Card>
                    <CardHeader>
                        <CardTitle>Enquiry From {enquiry.name}</CardTitle>
                        <CardContent>

                        </CardContent>
                    </CardHeader>
                </Card>
            </Drawer>
        </>
    )
}

export default ViewEnquirySidebar