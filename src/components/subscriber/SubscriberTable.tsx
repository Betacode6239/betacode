import React, { useState } from 'react'
import { PaginateOptions } from 'prisma-pagination'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from '@/utils/api';
import { nanoid } from 'nanoid';
import { formateDate } from '@/lib/utils';
import TextCopyButton from '../shared/TextCopyButton';
import TablePagination from '../shared/TablePagination';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { MoreHorizontal } from 'lucide-react';
import {Subscriber } from '@prisma/client';
import { Input } from '../ui/input';
import { debounce } from 'lodash'
import DeleteSubscriber from './DeleteSubscriber';


const RowAction = ({
    subscriber
}: { subscriber: Subscriber }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <MoreHorizontal className='w-4 h-4' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className='cursor-pointer text-red-700'>
                    <DeleteSubscriber subscriber={subscriber}>Delete</DeleteSubscriber>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}



const SubscriberTable = () => {
    const [pagination, setPagination] = useState<PaginateOptions>();
    const [search, setSearch] = useState<string>()
    const { data, isLoading } = api.subscriber.paginatedList.useQuery({ pagination, search });

    const searchSubscriber = debounce((q) => {
        setSearch(q)
    }, 2000);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchSubscriber(event.target.value)
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex gap-3 items-center">
                    <div className="">
                        <Input placeholder='Search by email' onChange={handleSearch} />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Email</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                data?.data.map(subscriber => {
                                    return (
                                        <TableRow key={nanoid()}>
                                            
                                            <TableCell >
                                                <a href={`mailto:${subscriber.email}`}>{subscriber.email}</a>
                                                <TextCopyButton textToCopy={subscriber.email} />
                                            </TableCell>
                                            <TableCell >{formateDate(subscriber.createdAt)}</TableCell>
                                            <TableCell>
                                                <RowAction subscriber={subscriber} />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex w-full justify-end">
                    <TablePagination pagination={data?.meta} onPaginate={(page) => {
                        setPagination({ page })
                    }} />
                </div>
            </CardFooter>
        </Card>
    )
}

export default SubscriberTable