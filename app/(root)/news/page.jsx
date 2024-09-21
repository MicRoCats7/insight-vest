"use client";

import Image from "next/image";
import { useEffect } from "react";
import { getHotNews, getMustReadNews, getLatestNews } from "@/constants/news";
import Link from "next/link";
import { motion } from "framer-motion"

export default function News() {
    let newsMustRead = getMustReadNews;

    useEffect(() => {
        document.body.style.backgroundColor = "#191A19"
        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, [])

    return (
        <section className="px-[25px] md:px-[75px] lg:px-[150px] mt-14">
            <motion.div
                className="flex"
            >
                <motion.span
                    className="text-xl md:text-2xl lg:text-3xl"
                    initial={{
                        x: -100,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 100
                    }}
                >
                    &#128293;
                </motion.span>
                <motion.h1
                    className="special-text font-general-sans-semibold text-xl md:text-2xl lg:text-3xl mb-7"
                    initial={{
                        x: -100,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 100
                    }}
                    transition={{
                        delay: 0.3
                    }}
                >
                    Hot News
                </motion.h1>
            </motion.div>

            <div className="flex justify-between gap-5 flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 overflow-hidden relative rounded-[20px]">
                    <Link href={`news/${getHotNews.id}`}>
                        <Image
                            className="cool-hover-img object-contain rounded-[20px] w-full h-auto"
                            sizes="100vw"
                            src={getHotNews.thumbnail}
                            alt={getHotNews.title}
                        />
                    </Link>
                </div>
                <div className="w-full lg:w-1/2 h-full flex flex-col">
                    <p className="mb-2.5">
                        <Link className="cool-hover font-general-sans-semibold text-xl md:text-2xl lg:text-3xl" href={`news/${getHotNews.id}`}>
                            {getHotNews.title}
                        </Link>
                    </p>
                    <p className="text-base md:text-lg lg:text-xl mb-2.5 opacity-60">{getHotNews.first_paragraph}</p>
                    <p className="font-general-sans-medium text-sm md:text-base lg:text-lg text-start">{getHotNews.date}</p>
                </div>
            </div>

            <div className="mt-16">
                <h1 className="text-xl md:text-2xl lg:text-3xl special-text font-general-sans-semibold mb-5">Must Read</h1>
                <div className="grid lg:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 gap-5">
                    {newsMustRead.map((news, index) => {
                        if (index != 2) {
                            return (
                                <div key={news.id} className={`col-span-1`}>
                                    <Link href={`news/${news.id}`}>
                                        <div className="w-full h-1/2 md:h-2/3 xl:w-full xl:h-[180px] mb-5 rounded-[20px] relative overflow-hidden">
                                            <Image
                                                className={`cool-hover-img w-full h-full xl:h-[180px] rounded-[20px]`}
                                                sizes="100vw"
                                                src={news.thumbnail}
                                                alt={news.title}
                                            />
                                        </div>
                                        <p className="mb-2.5 lg:mb-5">
                                            <span className="cool-hover text-sm md:text-base lg:text-[22px] leading-3 lg:leading-6 font-general-sans-semibold">
                                                {news.title}
                                            </span>
                                        </p>
                                    </Link>
                                    <p className="font-general-sans-medium text-xs md:text-sm lg:text-base opacity-60">{news.date}</p>
                                </div>
                            )
                        } else {
                            return (
                                <div key={news.id} className={`relative col-span-2 row-span-2`}>
                                    <Link href={`news/${news.id}`}>
                                        <div className="bg-gradient-to-b from-transparent to-black absolute w-full h-full rounded-[20px]"></div>
                                        <Image
                                            className={`mb-5 object-cover w-full h-full rounded-[20px]`}
                                            src={news.thumbnail}
                                            alt={news.title}
                                        />
                                        <div className="absolute bottom-0 p-2.5 md:p-5">
                                            <p className="mb-5">
                                                <span className="cool-hover text-sm md:text-base lg:text-[22px] font-general-sans-semibold">
                                                    {news.title}
                                                </span>
                                            </p>
                                            <p className="font-general-sans-medium text-xs md:text-sm lg:text-base opacity-60">{news.date}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            <div className="mt-16 mb-52">
                <h1 className="special-text-xs font-general-sans-semibold text-xl md:text-2xl lg:text-3xl mb-5">Latest News</h1>
                <div className="flex flex-col gap-5">
                    {getLatestNews.map((item, index) => (
                        <div key={index} className="flex flex-col lg:flex-row gap-5 border-b-[1px] border-slate-600 pb-5">
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
                    ))}
                </div>
            </div>
        </section>
    );
}
