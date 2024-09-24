"use client"
import Image from 'next/image';
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import Link from 'next/link';

function MustReadNewsGrid({ news, index, itemVariants }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    if (index !== 2) {
        return (
            <motion.div
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                className="col-span-1 news-card"
                variants={itemVariants}
                whileHover="hover"
            >
                <Link href={`news/${news.id}`}>
                    <div className="w-full h-1/2 md:h-2/3 xl:w-full xl:h-[180px] mb-5 rounded-[20px] relative overflow-hidden">
                        <Image
                            className={`w-full h-full xl:h-[180px] rounded-[20px]`}
                            sizes="100vw"
                            src={news.thumbnail}
                            alt={news.title}
                        />
                    </div>
                    <p className="mb-2.5 lg:mb-5">
                        <motion.span
                            className="cool-hover text-sm md:text-base lg:text-[22px] leading-3 lg:leading-6 font-general-sans-semibold"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
                        >
                            {news.title}
                        </motion.span>
                    </p>
                </Link>
                <p className="font-general-sans-medium text-xs md:text-sm lg:text-base opacity-60">{news.date}</p>
            </motion.div>
        );
    } else {
        return (
            <motion.div
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                className="relative col-span-2 row-span-2 news-card"
                variants={itemVariants}
                whileHover="hover"
            >
                <Link href={`news/${news.id}`}>
                    <div className="bg-gradient-to-b from-transparent to-black absolute w-full h-full rounded-[20px]"></div>
                    <Image
                        className={`mb-5 object-cover w-full h-full rounded-[20px]`}
                        src={news.thumbnail}
                        alt={news.title}
                    />
                    <div className="absolute bottom-0 p-2.5 md:p-5">
                        <p className="mb-5">
                            <motion.span
                                className="cool-hover text-sm md:text-base lg:text-[22px] font-general-sans-semibold"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
                            >
                                {news.title}
                            </motion.span>
                        </p>
                        <p className="font-general-sans-medium text-xs md:text-sm lg:text-base opacity-60">{news.date}</p>
                    </div>
                </Link>
            </motion.div>
        );
    }
}

export default MustReadNewsGrid