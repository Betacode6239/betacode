import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {EnquiryTypes, EnquiryTypesArray} from '@/schema/EnquirySchema'

const EnquiryTypeSelector = ({
    onChange,
    value,
}: {
    onChange?: (e: any) => void,
    value?: any,
}) => {
    return (
        <Select onValueChange={onChange} defaultValue={value} >
            <SelectTrigger >
                <SelectValue placeholder="Select Enquiry Type" />
            </SelectTrigger>
            <SelectContent>
                {
                    EnquiryTypesArray.map(enq => {
                        return (
                            <SelectItem value={enq}>{enq}</SelectItem>
                        )
                    })
                }
            </SelectContent>
        </Select>
    )
}

export default EnquiryTypeSelector