import { cn } from '@/lib/utils'
import React, { ReactPropTypes } from 'react'
import Highlight from 'react-highlight'

const EditorPanel = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} className={cn([
            'bg-[#011627]  h-full overflow-auto p-5 w-full',
            props.className
        ])}>
            <Highlight className='w-80 h-48'>
                {`
import React from 'react'
import Highlight from 'react-highlight'

const EditorPanel = () => {
    return (
        <div>
            <Highlight className='w-80 h-48'>
                {function foo() { return 'bar' }}
            </Highlight>
        </div>
    )
}

export default EditorPanel
                `}
            </Highlight>
        </div>
    )
}

export default EditorPanel