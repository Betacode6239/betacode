import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { UseFormReturn, useForm, } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { CreateEnquiryInput, CreateEnquirySchema, EnquiryTypes } from '@/schema/EnquirySchema'
import GeneralSubFormInput from './GeneralSubFormInput'
import { cn } from '@/lib/utils'
import { api } from '@/utils/api'
import { useToast } from '../ui/use-toast'


const EnquiryForm = ({
    type='GENERAL',
    subForm,
    title,
    className,
    onDone
}: {
    type?: EnquiryTypes,
    subForm?: (form: UseFormReturn<any>) => any,
    title?: string,
    className?: string,
    onDone?: () => void
}) => {
    const {data, isLoading, mutateAsync} = api.enquiry.create.useMutation()
    const form = useForm<CreateEnquiryInput>({
        resolver: zodResolver(CreateEnquirySchema),
        defaultValues: {type},
    })
    const {toast} = useToast()

    const save = async (value: CreateEnquiryInput) => {
        try {
            const res = await mutateAsync(value);
            toast({
                title: 'Request submitted succefully!'
            });
            form.reset({...form.formState.defaultValues});
            onDone?.();

        } catch (error) {
            toast({
                variant: 'destructive', 
                title: 'Submission failed. Please try again later'
            });

        }
    }

    const onSubmit = (value: any) => {
        console.log({ value })
        void save(value);
    }

    return (
        <Card className={cn([
            'shadow-none',
            className
        ])}>
            <CardHeader>
                <CardTitle>
                    {title}
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
                            name="type"
                            render={({field}) => (
                                <FormItem hidden>
                                    <FormControl>
                                        <Input placeholder='type' {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        {
                            subForm?.(form) || <GeneralSubFormInput/>
                        }
                        <div className='pt-3'>
                            <Button disabled={isLoading} className='w-full'>Submit</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default EnquiryForm