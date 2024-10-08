"use client"
import Loading from '@/components/shared/Loading';
import { getDetailEducation, getDetailMaterial, getListDetailMaterial } from '@/constants/education';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function page({ params }) {
    const [isLoading, setIsLoading] = useState(false);
    let educationDetail = getDetailEducation(params.id)
    let ListMaterialDetail = getListDetailMaterial(educationDetail.material.sub_material, params.MaterialId[0])
    let materialDetail = getDetailMaterial(ListMaterialDetail.content, params.MaterialId[2])

    let currentIndexMaterial = ListMaterialDetail.content.map(item => item.id).indexOf(materialDetail.id)
    let nextIDMaterial = ListMaterialDetail.content[currentIndexMaterial + 1]?.id

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
            <div className='mt-5 grid md:grid-cols-3 grid-cols-1 md:gap-10'>
                <div className='md:col-span-1 mb-12 md:mb-0'>
                    {ListMaterialDetail.content.map((item, index) => (
                        <div key={index} className='border-b-2 border-[#2B2B2B] py-5'>
                            <Link href={`${item.id}`} onClick={handleCardClick}>
                                <h1
                                    className={`md:text-2xl text-lg font-general-sans-medium text-[#ffffff50]
                                    ${item.id === materialDetail.id ? 'text-white' : ''}`}
                                >
                                    {`${params.MaterialId[1]}.${index + 1}`} {item.heading}
                                </h1>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='col-span-2 border-white/30 border-2 rounded-[20px] p-5'>
                    <h1 className='font-general-sans-medium text-2xl mb-5'>{materialDetail.heading}</h1>

                    {materialDetail.image ?
                        <Image
                            src={materialDetail.image}
                            alt={`${materialDetail.heading} image`}
                            className='mb-5'
                        />
                        : null
                    }

                    <p className='text-xl leading-6 whitespace-pre-line text-white/60 mb-5'>{materialDetail.text}</p>

                    {materialDetail.content.map((item, index) => (
                        <div key={index}>
                            <h1 className='font-general-sans-medium text-2xl mb-5'>{item.chapter_title}</h1>
                            <p className='text-xl leading-6 whitespace-pre-line text-white/60 mb-5'>
                                {item.text}
                            </p>
                        </div>
                    ))}

                    {nextIDMaterial === undefined ?
                        null
                        : <Link href={`${nextIDMaterial}`} onClick={handleCardClick}>
                            <div className="flex items-center ml-auto justify-between bg-[#9E33D7] w-28 rounded-[10px] cursor-pointer mt-4">
                                <span className="pl-[15px] py-[7px] font-general-sans-semibold">
                                    Next
                                </span>
                                <div className="bg-[#7A1CAC] p-2 rounded-r-[10px]">
                                    <MdKeyboardArrowRight size={25} />
                                </div>
                            </div>
                        </Link>
                    }
                </div>
            </div>
        </>
    )
}
