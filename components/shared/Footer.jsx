import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { Separator } from '../ui/separator';

function Footer() {
  return (
    <section className='pt-[60px] pb-5 border-t border-[#ffffff30] bg-[#191A19]'>
      <div className='bg-[#191A19] absolute bottom-0 left-0 right-0'></div>
      <div className='wrapper'>
        <div className='flex items-center justify-between'>
          <Image
            src="/assets/Ellipse 1.svg"
            alt="Logo"
            width={100}
            height={100}
          />
          <ul className='flex gap-[35px] text-[#ffffff50] font-general-sans-medium'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Services</li>
          </ul>
        </div>
        <div className='flex items-center gap-4 mt-[65px]'>
          <FaXTwitter size={40} className='bg-[#2F312F] p-2 rounded-full hover:bg-[#7A1CAC] cursor-pointer' />
          <FaInstagram size={40} className='bg-[#2F312F] p-2 rounded-full hover:bg-[#7A1CAC] cursor-pointer' />
          <CiFacebook size={40} className='bg-[#2F312F] p-2 rounded-full hover:bg-[#7A1CAC] cursor-pointer' />
        </div>
        <Separator className="my-5 bg-[#ffffff50]" />
        <div className='flex justify-end'>
          <span className='text-[#ffffff50] font-general-sans-medium'>© Copyright InsightVest 2024</span>
        </div>
      </div>
    </section>
  )
}

export default Footer