import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { Separator } from '../ui/separator';
import logo from '@/public/assets/logo-insightVest.svg'

function Footer() {
  return (
    <section className='md:pt-[60px] pt-10 pb-5 border-t border-[#ffffff30] bg-[#191A19]'>
      <div className='md:wrapper wrapper-mobile'>
        <div className='flex md:items-center justify-between md:flex-row flex-col'>
          <Image
            src={logo}
            alt="Logo"
            className='mb-5 md:mb-0 w-[200px] h-[50px] md:w-[250px] md:h-[75px] cursor-pointer'
          />
          <ul className='flex md:flex-row flex-col md:gap-[35px] gap-3 text-base text-[#ffffff50] font-general-sans-medium'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>News</li>
          </ul>
        </div>
        <div className='flex items-center gap-4 mt-[65px]'>
          <FaXTwitter size={40} className='bg-[#2F312F] p-2 rounded-full hover:bg-[#7A1CAC] cursor-pointer' />
          <FaInstagram size={40} className='bg-[#2F312F] p-2 rounded-full hover:bg-[#7A1CAC] cursor-pointer' />
          <CiFacebook size={40} className='bg-[#2F312F] p-2 rounded-full hover:bg-[#7A1CAC] cursor-pointer' />
        </div>
        <Separator className="my-5 bg-[#ffffff50]" />
        <div className='flex md:justify-end justify-start'>
          <span className='text-[#ffffff50] font-general-sans-medium'>© Copyright InsightVest 2024</span>
        </div>
      </div>
    </section>
  )
}

export default Footer