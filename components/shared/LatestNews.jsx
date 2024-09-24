"use client"

import { useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

function LatestNews({ item, index }) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <div
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            key={index}
            className="flex flex-col lg:flex-row gap-5 border-b-[1px] border-slate-600 pb-5"
        >
            <div className="w-full lg:w-1/3">
                <div className="overflow-hidden rounded-[20px] relative w-full h-auto">
                    <Link href={`news/${item.id}`}>
                        <Image
                            className="cool-hover-img w-full h-auto rounded-[20px]"
                            src={item.thumbnail}
                            alt={item.title}
                        />
                    </Link>
                </div>
            </div>
            <div className="w-full lg:w-2/3">
                <Link href={`news/${item.id}`}>
                    <p className="mb-2.5 lg:mb-5 mt-2.5 lg:mt-0">
                        <span className="cool-hover text-sm md:text-base lg:text-[22px] leading-6 font-general-sans-semibold">
                            {item.title}
                        </span>
                    </p>
                </Link>
                <p className="leading-5 text-sm md:text-base lg:text-lg mb-2.5 opacity-60">{item.first_paragraph}</p>
                <p className="font-general-sans-medium text-sm md:text-base lg:text-lg">{item.date}</p>
            </div>
        </div>
    )
}

export default LatestNews