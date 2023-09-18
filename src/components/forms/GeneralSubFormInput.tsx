import React from 'react'
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const GeneralSubFormInput = () => {
    return (
        <>
            <FormField
                name="content.subject"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                            <Input placeholder='Subject' {...field} />
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

export default GeneralSubFormInput