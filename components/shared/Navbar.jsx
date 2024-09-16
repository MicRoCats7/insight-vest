"use client"

import { headerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function Navbar() {
    const pathName = usePathname();

    return (
        <section className='flex items-center justify-between wrapper py-5'>
            <div className='flex items-center gap-4'>
                <Image
                    src="/assets/Ellipse 1.svg"
                    alt='Logo'
                    width={40}
                    height={40}
                />
                <h1>Logo</h1>
            </div>
            <div>
                <ul className='flex items-center gap-9 font-general-sans-medium'>
                    {headerLinks.map((link, index) => {
                        const isActive = pathName === link.route;
                        return (
                            <li
                                key={index}
                                className={`${isActive ? 'text-white' : 'text-[#ffffff50]'
                                    } flex-center p-medium-16 whitespace-nowrap`}
                            >
                                <Link href={link.route}>{link.label}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Navbar