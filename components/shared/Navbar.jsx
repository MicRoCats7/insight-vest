"use client"

import { headerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import NavbarMobile from './NavbarMobile';
import logo from '@/public/assets/logo-insightVest.svg'

function Navbar() {
    const pathName = usePathname();

    return (
        <section className='py-5 bg-transparent'>
            <div className='md:wrapper wrapper-mobile'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <Image
                            src={logo}
                            alt='Logo'
                            className='cursor-pointer w-[150px] md:w-[200px]'
                        />
                    </div>
                    <div className='hidden md:block'>
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
                    <div className='md:hidden'>
                        <NavbarMobile />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar