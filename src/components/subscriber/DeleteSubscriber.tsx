import { api } from '@/utils/api'
import { Enquiry, Subscriber } from '@prisma/client'
import React from 'react'
import { useToast } from '../ui/use-toast'

const DeleteSubscriber = ({
    subscriber,
    children
}: {
    subscriber: Subscriber,
    children?: any
}) => {
    const deleteMutation = api.subscriber.delete.useMutation();
    const ctx = api.useContext()
    const { toast } = useToast();


    const deleteAction = async () => {
        if (deleteMutation.isLoading) return;
        try {
            const res = await deleteMutation.mutateAsync({ id: subscriber.id });
            ctx.subscriber.invalidate();
            toast({ title: 'Subscriber deleted successfully!' })
        } catch (error) {
            toast({
                title: 'Problem when deleting subscriber',
                variant: 'destructive'
            });
        }
    }


    return (
        <span onClick={() => void deleteAction()}>{children}</span>
    )
}

export default DeleteSubscriber