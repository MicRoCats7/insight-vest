"use client";

import Image from "next/image";
import { useEffect } from "react";
import { getHotNews, getLatestNews, getMustReadNews } from "@/constants/news";
import Link from "next/link";
import { motion } from "framer-motion"
import LatestNews from "@/components/shared/LatestNews";
import MustReadNewsGrid from "@/components/shared/MustReadNewsGrid";

export default function News() {
    useEffect(() => {
        document.body.style.backgroundColor = "#191A19"
        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, [])

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    // Define the item variants
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hover: { scale: 1.05 },
    };

    return (
        <section className="md:wrapper wrapper-mobile pt-14">
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
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 100
                    }}
                    animate={{
                        opacity: 100,
                        y: 0
                    }}
                    transition={{
                        delay: 0.5
                    }}
                    className="w-full lg:w-1/2 overflow-hidden relative rounded-[20px]"
                >
                    <Link href={`news/${getHotNews.id}`}>
                        <Image
                            className="cool-hover-img object-contain rounded-[20px] w-full h-auto"
                            sizes="100vw"
                            src={getHotNews.thumbnail}
                            alt={getHotNews.title}
                        />
                    </Link>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 100
                    }}
                    animate={{
                        opacity: 100,
                        x: 0
                    }}
                    transition={{
                        delay: 0.9
                    }}
                    className="w-full lg:w-1/2 h-full flex flex-col"
                >
                    <p className="mb-2.5">
                        <Link className="cool-hover font-general-sans-semibold text-xl md:text-2xl lg:text-3xl" href={`news/${getHotNews.id}`}>
                            {getHotNews.title}
                        </Link>
                    </p>
                    <p className="text-base md:text-lg lg:text-xl mb-2.5 opacity-60">{getHotNews.first_paragraph}</p>
                    <p className="font-general-sans-medium text-sm md:text-base lg:text-lg text-start">{getHotNews.date}</p>
                </motion.div>
            </div>

            <div className="mt-16">
                <h1 className="text-xl md:text-2xl lg:text-3xl special-text font-general-sans-semibold mb-5">Must Read</h1>
                <motion.div
                    className="grid lg:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {getMustReadNews.map((news, index) => (
                        <MustReadNewsGrid news={news} index={index} key={index} itemVariants={itemVariants} />
                    ))}
                </motion.div>
            </div>

            <div className="mt-16 mb-52">
                <h1 className="special-text-xs font-general-sans-semibold text-xl md:text-2xl lg:text-3xl mb-5">Latest News</h1>
                <div className="flex flex-col gap-5">
                    {getLatestNews.map((item, index) => (
                        <LatestNews item={item} index={index} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
