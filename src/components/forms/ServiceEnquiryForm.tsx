import { SoftwareList, getSoftwareByCode } from '@/data/Softwares'
import React, { useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '../ui/textarea'
import PhoneInput from '../shared/PhoneInput'
import { ServiceCodes, getServiceByCode, servicesList } from '@/data/ServiceData'


export type ServiceEnquiryConfig = {
    pinned?: ServiceCodes,
}

const ServiceEnquiry = ({
    config,
    form
}: {
    config?: ServiceEnquiryConfig,
    form: UseFormReturn
}) => {
    const [selectedService, setSelecedService] = useState<string>();

    useEffect(() => {
        if (config && config.pinned) {
            const service = getServiceByCode(config.pinned)?.name;
            form.setValue('content.service', service);
            setSelecedService(service)
        }
    }, [config])

    useEffect(() => {
        form.setValue('type', 'SERVICE');
    }, [])


    return (
        <>
            <FormField
                control={form.control}
                name="content.service"
                render={({ field }) => (
                    <FormItem >
                        <FormLabel>Service</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || selectedService} defaultValue={field.value || selectedService}>
                            <FormControl >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select the Software" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {
                                    servicesList.map(sft => {
                                        return (
                                            <SelectItem value={sft.name}>{sft.name}</SelectItem>
                                        )
                                    })
                                }
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                name="content.phone"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                            <PhoneInput {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />

            <FormField
                name="content.message"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                            <Textarea placeholder='Message' {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />



        </>
    )
}

export default ServiceEnquiry