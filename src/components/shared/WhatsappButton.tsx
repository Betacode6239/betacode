import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import WhatsappIcon from '../icons/WhatsappIcon'
import { api } from '@/utils/api'
import { IntegrationSettingOutput } from '@/schema/settingSchema'
import { ReloadIcon } from '@radix-ui/react-icons'

const WhatsappButton = ({
    children
}: {
    children?: any
}) => {
    const { data, isLoading = true } = api.setting.get.useQuery<any, IntegrationSettingOutput>({ type: 'INTEGRATION' })
    return (
        <a target='_blank' href={data?.value.whatsapp?.number ? `https://wa.me/${data?.value.whatsapp?.number}` : '#'}>
            {
                children
                ||
                <Button
                    className=' space-x-2 '
                    variant={'outline'}>
                    {
                        isLoading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : <WhatsappIcon />
                    }
                    <span>Whatsapp</span>
                </Button>
            }
        </a>
    )
}

export default WhatsappButton