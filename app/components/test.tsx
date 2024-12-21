'use client'

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Test = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const Handleopen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className='bg-gray-800 text-white fixed top-0 w-full shadow-md z-50'>
            <div className='container mx-auto flex justify-between items-center p-4'>
                <div className='text-2xl font-bold'>
                    <Link href="/">MyWebsite</Link>
                </div>

                <button
                    onClick={Handleopen}
                    className='text-xl md:hidden block'
                    aria-label="Toggle Navigation">
                    ☰
                </button>

                {/* Links */}
                <div className= {`flex flex-col md:flex md:flex-row md:items-center gap-6 absolute md:static w-full md:w-auto top-[60px] md:top-auto left-0 bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                    <Link
                        href='/'
                        className= {`px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent hover:text-yellow-400 ${
                            pathname === '/' ? 'text-yellow-500 font-bold' : ''
                        }`}
                        onClick={Handleopen}
                    >
                        Home
                    </Link>
                    <Link
                    href='/about'
                    className={`px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent hover:text-yellow-400 ${pathname === '/about' ? 'text-yellow-500 font-bold' : ''}`}
                    onClick={Handleopen}
                    >
                        About
                    </Link>
                    <Link
                    href='/services'
                    onClick={Handleopen}
                    className={`px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent hover:text-yellow-400 ${pathname === '/services' ? 'text-yellow-500 font-bold' : ''}`}>
                        Services
                    </Link>
                    <Link
                    href='contact'
                    onClick={Handleopen}
                    className={`px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent hover:text-yellow-400 ${pathname === '/contact' ? 'text-yellow-500 font-bold' : ''}`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Test;