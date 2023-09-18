import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { useForm, } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { ContactInput, ContactSchema } from '@/schema/ContactSchema'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const ContactCard = ({

}) => {
    const form = useForm<ContactInput>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {},
    })


    const onSubmit = (value: any) => {
        console.log({ value })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Send Us A Message
                </CardTitle>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                    <Input placeholder='Name' {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Email' {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="subject"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Subject' {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="message"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Massage</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder='Message' {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <div className='pt-3'>
                            <Button className='w-full'>Submit</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default ContactCard