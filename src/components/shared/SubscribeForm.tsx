import React from 'react'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { useForm, } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { CreateSubscribeInput, CreateSubscribeSchema } from '@/schema/SubscribeSchema'
import { api } from '@/utils/api'
import { useToast } from '../ui/use-toast'
import { TRPCError } from '@trpc/server'
import { ReloadIcon } from '@radix-ui/react-icons'
import { TRPCClientError } from '@trpc/client'



const SubscribeForm = ({

}) => {
    const createMutation = api.subscriber.create.useMutation();
    const form = useForm<CreateSubscribeInput>({
        resolver: zodResolver(CreateSubscribeSchema),
        defaultValues: { email: '' },
    });
    const { toast } = useToast();


    const action = async (value: CreateSubscribeInput) => {
        try {
            const res = await createMutation.mutateAsync(value);
            toast({
                title: 'You are subscribed successfully!'
            })
        } catch (error) {
            if (error instanceof TRPCClientError) {
                if (error.data.code === 'BAD_REQUEST') {
                    toast({
                        title: 'You already subscribed!'
                    })
                }
            }
            toast({
                title: 'Subscription failed',
                variant: 'destructive'
            })
        }
    }


    const onSubmit = (value: any) => {
        if (!createMutation.isLoading) {
            void action(value);
        }
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" flex items-center gap-2 text-black">
                <div className='flex-grow'>
                    <FormField
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>Name</FormLabel> */}
                                <FormControl>
                                    <Input type='email' placeholder='Email' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <div className='flex-grow-0'>
                    <Button
                        className=' space-x-2 '
                        variant={'secondary'}>
                        {
                            createMutation.isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        }
                        <span>Subscribe</span>
                    </Button>
                </div>
            </form>
        </Form>

    )
}

export default SubscribeForm