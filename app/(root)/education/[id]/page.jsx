'use client'

import Image from 'next/image'
import iconTask from '@/public/assets/education/icon_task.svg';
import iconNavigate from '@/public/assets/education/ic_round-navigate-next.svg';
import { getDetailEducation } from '@/constants/education';
import Link from 'next/link';
import Loading from '@/components/shared/Loading';
import { useState } from 'react';

export default function page({ params }) {
    let educationDetail = getDetailEducation(params.id)
    const [isLoading, setIsLoading] = useState(false);

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
            <div className='flex flex-col gap-5 mt-10'>
                {educationDetail.material.sub_material.map((item, index) => (
                    <Link href={`/education/${params.id}/material/${item.id}/${index + 1}/${item.content[0].id}`} onClick={handleCardClick}>
                        <div key={index} className='w-full rounded-[20px] bg-[#232523] p-5 flex justify-between items-center'>
                            <div className='flex items-center md:gap-7 gap-3'>
                                <div className='w-16 h-16 bg-[#363736] flex items-center justify-center rounded-xl'>
                                    <Image
                                        src={iconTask}
                                        alt='icon task'
                                        className='md:w-8 md:h-8'
                                    />
                                </div>
                                <h1 className='font-general-sans-semibold md:text-2xl text-xl w-[200px] md:w-auto'>{index + 1}. {item.chapter_title}</h1>
                            </div>
                            <div>
                                <Image
                                    src={iconNavigate}
                                    alt='icon navigate'
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}
