"use client"

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import Loading from './Loading';

function CardLearning({ item, isSpecial, isOdd }) {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const cardClass = isMobile
        ? (isOdd ? 'bg-gradient-card-learning' : 'bg-gradient-card')
        : (isSpecial ? 'bg-gradient-card-learning' : 'bg-gradient-card');


    const handleCardClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <>
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <Loading />
                </div>
            )}
            <Card className={`${cardClass} border-none rounded-[20px] relative overflow-hidden`}>
                <CardHeader>
                    <CardTitle className="drop-shadow-2xl">
                        <p className="text-white font-general-sans-semibold md:text-[26px] text-xl">
                            {item.title}
                        </p>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex w-full justify-between relative z-10">
                    <div className="flex flex-col md:w-[70%]">
                        <p className="font-general-sans-regular text-white md:text-lg text-base [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.49)]">
                            {item.desc}
                        </p>
                        <Link href={`education/${item.id}`} onClick={handleCardClick}>
                            <div className="flex items-center justify-between bg-[#FFFFFF] lg:w-1/2 w-full rounded-[10px] cursor-pointer mt-4">
                                <span className="pl-[15px] py-[7px] font-general-sans-semibold">
                                    Start Learning
                                </span>
                                <div className="bg-[#EBEBEB] p-2 rounded-r-[10px]">
                                    <MdKeyboardArrowRight size={25} />
                                </div>

                            </div>
                        </Link>
                    </div>
                </CardContent>
                <Image
                    src={item.thumbnail}
                    alt="stock investment"
                    className="absolute bottom-0 right-0"
                    style={{ width: '40%', height: 'auto', pointerEvents: 'none' }}
                />
            </Card>
        </>
    );
}

export default CardLearning;
