import { SoftwareCodes, SoftwareList, getSoftwareByCode } from '@/data/Softwares'
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


export type SoftwareEnquiryConfig = {
    pinned?: SoftwareCodes,
}

const SoftwareEnquiry = ({
    config,
    form
}: {
    config?: SoftwareEnquiryConfig,
    form: UseFormReturn
}) => {
    const [selectedSoftware, setSelecedSoftware] = useState<string>();

    useEffect(() => {
        if (config && config.pinned) {
            const software = getSoftwareByCode(config.pinned)?.name;
            form.setValue('content.productName', software);
            setSelecedSoftware(software)
        }
    }, [config])

    useEffect(() => {
        form.setValue('type', 'SOFTWARE');
    }, [])


    return (
        <>
            <FormField
                control={form.control}
                name="content.productName"
                render={({ field }) => (
                    <FormItem >
                        <FormLabel>Softwares</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || selectedSoftware} defaultValue={field.value||selectedSoftware}>
                            <FormControl >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select the Software" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {
                                    SoftwareList.map(sft => {
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

export default SoftwareEnquiry