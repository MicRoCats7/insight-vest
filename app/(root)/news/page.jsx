"use client";

import Image from "next/image";
import { useEffect } from "react";
import { getHotNews, getMustReadNews, getLatestNews } from "@/constants/news";

export default function News() {

    let newsMustRead = getMustReadNews;
    console.log(newsMustRead);

    useEffect(() => {
        document.body.style.backgroundColor = "#191A19"

        // Clean up on unmount
        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, [])

    return (
        <section className="wrapper mt-14">
            <div className="flex">
                <span className="text-3xl">&#128293;</span>
                <h1 className="special-text font-general-sans-semibold text-3xl mb-7">Hot News</h1>
            </div>

            <div className="flex justify-between gap-5">
                <div className="w-1/2 relative">
                    <Image
                        className="object-contain rounded-[20px]"
                        src={getHotNews.thumbnail}
                        alt={getHotNews.title}
                    />
                </div>
                <div className="w-1/2 h-full flex flex-col">
                    <h1 className="font-general-sans-semibold text-3xl mb-2.5">{getHotNews.title}</h1>
                    <p className="text-xl mb-2.5 opacity-60">{getHotNews.first_paragraph}</p>
                    <p className="font-general-sans-medium text-lg text-start">{getHotNews.date}</p>
                </div>
            </div>

            <div className="mt-16">
                <h1 className="special-text font-general-sans-semibold text-3xl mb-5">Must Read</h1>
                <div className="grid grid-cols-4 grid-rows-2 gap-2.5">
                    {newsMustRead.map((news, index) => {
                        if (index != 2) {
                            return (
                                <div key={news.id} className={`relative col-span-1`}>
                                    <Image
                                        className={`mb-5 w-[270px] h-[180px] rounded-[20px]`}
                                        src={news.thumbnail}
                                        alt={news.title}
                                    />
                                    <p className="mb-5 text-[22px] leading-6 font-general-sans-semibold">{news.title}</p>
                                    <p className="font-general-sans-medium text-base opacity-60">{news.date}</p>
                                </div>
                            )
                        } else {
                            return (
                                <div key={news.id} className={`relative col-span-2 row-span-2`}>
                                    <div className="bg-gradient-to-b from-transparent to-black absolute w-full h-full rounded-[20px]"></div>
                                    <Image
                                        className={`mb-5 object-cover w-full h-full rounded-[20px]`}
                                        src={news.thumbnail}
                                        alt={news.title}
                                    />
                                    <div className="absolute bottom-0 p-5">
                                        <p className="mb-5 text-[22px] font-general-sans-semibold">{news.title}</p>
                                        <p className="font-general-sans-medium text-base opacity-60">{news.date}</p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>


            <div className="mt-16 mb-52">
                <h1 className="special-text font-general-sans-semibold text-3xl mb-5">Latest News</h1>
                <div className="flex flex-col gap-5">
                    {getLatestNews.map((item) => (
                        <div className="flex border-b-[1px] border-slate-600 pb-5">
                            <div className="w-1/3">
                                <Image
                                    className="w-[367px] h-[240px] rounded-[20px]"
                                    src={item.thumbnail}
                                    alt={item.title}
                                />
                            </div>
                            <div className="w-2/3">
                                <h1 className="mb-5 text-[22px] leading-6 font-general-sans-semibold">{item.title}</h1>
                                <p className="leading-5 text-lg mb-2.5 opacity-60">{item.first_paragraph}</p>
                                <p className="font-general-sans-medium text-lg">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
