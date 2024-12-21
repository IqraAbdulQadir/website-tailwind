import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Contact () {
    return (
        <div className='flex flex-col justify-center items-center mt-3 '>
            <h1 className='text-2xl text-bold'>Contact</h1>
            <Link href='/'>
            <Button variant='default' className='mt-3'> Home </Button>
        </Link></div>
    )
}