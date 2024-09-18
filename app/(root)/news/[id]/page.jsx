"use client";

import { getDetailNews, getOtherNews } from '@/constants/news';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useEffect } from "react";

export default function page({ params }) {
    let newsDetail = getDetailNews(params.id)
    let otherNews = getOtherNews(params.id);

    useEffect(() => {

        document.body.style.backgroundColor = "#191A19"

        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, [])

    return (
        <section className="px-[25px] md:px-[75px] lg:px-[150px] mt-14 flex flex-col xl:flex-row gap-10">
            <div className='w-full xl:w-[753px]'>
                <h1 className="font-general-sans-semibold text-xl md:text-2xl lg:text-3xl leading-7 mb-5">{newsDetail.title}</h1>
                <p className="font-general-sans-medium text-sm md:text-base lg:text-lg text-start mb-5">{newsDetail.date}</p>
                <Image
                    className="object-contain rounded-[20px] mb-5 w-full h-auto"
                    sizes='100vw'
                    src={newsDetail.thumbnail}
                    alt={newsDetail.title}
                />
                <p className="text-base md:text-lg lg:text-xl leading-6 mb-2.5 opacity-60 whitespace-pre-line">{newsDetail.content}</p>
            </div>
            <div className='w-full xl:w-[367px]'>
                <h1 className="special-text font-general-sans-semibold text-xl md:text-2xl lg:text-3xl leading-7 mb-5">Other News</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-1'>
                    {otherNews.map((item, index) => (
                        <div key={index}>
                            <Link href={`${item.id}`}>
                                <div className='relative overflow-hidden h-[200px] rounded-[20px] mb-2.5 lg:mb-5'>
                                    <Image
                                        className="w-full h-auto rounded-[20px] object-cover"
                                        fill
                                        src={item.thumbnail}
                                        alt={item.title}
                                    />
                                </div>
                                <p className='mb-2.5'>
                                    <span className="cool-hover font-general-sans-semibold text-sm md:text-base lg:text-[22px] leading-7">{item.title}</span>
                                </p>
                            </Link>
                            <p className="font-general-sans-medium text-xs md:text-sm lg:text-base text-start mb-5 opacity-60">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
