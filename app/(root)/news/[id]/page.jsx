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
        <section className="wrapper mt-14 flex gap-10">
            <div className='w-[753px]'>
                <h1 className="font-general-sans-semibold text-3xl leading-7 mb-5">{newsDetail.title}</h1>
                <p className="font-general-sans-medium text-lg text-start mb-5">{newsDetail.date}</p>
                <Image
                    className="object-contain rounded-[20px] mb-5"
                    width={753}
                    height={400}
                    src={newsDetail.thumbnail}
                    alt={newsDetail.title}
                />
                <p className="text-xl leading-6 mb-2.5 opacity-60 whitespace-pre-line">{newsDetail.content}</p>
            </div>
            <div className='w-[367px]'>
                <h1 className="special-text font-general-sans-semibold text-3xl leading-7 mb-5">Other News</h1>
                {otherNews.map((item, index) => (
                    <div key={index}>
                        <Link href={`${item.id}`}>
                            <Image
                                className="object-contain rounded-[20px] mb-5"
                                width={753}
                                height={400}
                                src={item.thumbnail}
                                alt={item.title}
                            />
                            <h1 className="font-general-sans-semibold text-[22px] leading-7 mb-2.5">{item.title}</h1>
                        </Link>
                        <p className="font-general-sans-medium text-[16px] text-start mb-5 opacity-60">{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
