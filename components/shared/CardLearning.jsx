import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';

function CardLearning({ item, isSpecial }) {
    return (
        <Card className={`${isSpecial ? 'bg-gradient-card-learning' : 'bg-gradient-card'
            } border-none rounded-[20px] relative overflow-hidden`}>
            <CardHeader>
                <CardTitle className="drop-shadow-2xl">
                    <p className="text-white font-general-sans-semibold text-[26px]">
                        {item.title}
                    </p>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex w-full justify-between relative z-10">
                <div className="flex flex-col w-[70%]">
                    <p className="font-general-sans-regular text-white text-lg">
                        {item.desc}
                    </p>
                    <div className="flex items-center justify-between bg-[#FFFFFF] w-1/2 rounded-[10px] cursor-pointer mt-4">
                        <span className="pl-[15px] py-[7px] font-general-sans-semibold">
                            Start Learning
                        </span>
                        <div className="bg-[#EBEBEB] p-2 rounded-r-[10px]">
                            <MdKeyboardArrowRight size={25} />
                        </div>
                    </div>
                </div>
            </CardContent>
            <Image
                src={item.thumbnail}
                alt="stock investment"
                className="absolute bottom-0 right-0"
                style={{ width: '40%', height: 'auto', pointerEvents: 'none' }}
            />
        </Card>
    );
}

export default CardLearning;
