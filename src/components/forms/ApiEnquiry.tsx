import { SoftwareCodes, SoftwareList, getSoftwareByCode } from '@/data/Softwares'
import React, { useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '../ui/textarea'
import { ApiCodes, apiList, getApiByCode } from '@/data/ApiData'


export type ApiEnquiryConfig = {
    pinned?: ApiCodes,
}

const ApiEnquiry = ({
    config,
    form
}: {
    config?: ApiEnquiryConfig,
    form: UseFormReturn
}) => {
    const [selectedApi, setSelectedApi] = useState<string>();

    useEffect(() => {
        if (config && config.pinned) {
            const api = getApiByCode(config.pinned)?.name;
            form.setValue('content.apiName', api);
            setSelectedApi(api)
            console.log('Selected Api', api)
        }
    }, [config])

    useEffect(() => {
        form.setValue('type', 'API');
    }, [])


    return (
        <>
            <FormField
                control={form.control}
                name="content.apiName"
                render={({ field }) => (
                    <FormItem >
                        <FormLabel>API Codes</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || selectedApi} defaultValue={field.value||selectedApi}>
                            <FormControl >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select the API" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {
                                    apiList.map(sft => {
                                        return (
                                            <SelectItem value={sft.name}>{sft.name}</SelectItem>
                                        )
                                    })
                                }
                            </SelectContent>
                        </Select>
                        <FormMessage/>
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

export default ApiEnquiry