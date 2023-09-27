import { api } from '@/utils/api'
import React, { ReactNode, useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PopupData } from '@/schema/PopupSchema'
import Link from 'next/link'
import Slider from 'react-slick'
import { nanoid } from 'nanoid'
import Image from 'next/image'



const PopupContent = ({
    data
}:{
    data: PopupData
}) => {
    return (
        <Link href={data.content.href||'#'} className='h-full w-full bg-center bg-contain bg-no-repeat block relative'  >
            <Image src={data.content.image?.publicUrl||''} fill={true} alt='' className='object-contain' />
        </Link>
    )
}

const PopupModal = ({
    children
}: {
    children?: ReactNode
}) => {
    const { data, isLoading } = api.popup.getAll.useQuery({});
    const [open, setOpen] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 10000);
    }, [])


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className='p-0 max-w-2xl'>
                <div className="overflow-hidden">
                    <Slider {...settings}>
                        {
                            data?.data.map(dt => {
                                return (
                                    <div className='w-full h-full aspect-square' key={nanoid()}><PopupContent data={dt} /></div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default PopupModal