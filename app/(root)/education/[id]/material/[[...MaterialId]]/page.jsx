"use client"
import { getDetailEducation, getDetailMaterial, getListDetailMaterial } from '@/constants/education';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function page({ params }) {
    let educationDetail = getDetailEducation(params.id)
    let ListMaterialDetail = getListDetailMaterial(educationDetail.material.sub_material, params.MaterialId[0])
    let materialDetail = getDetailMaterial(ListMaterialDetail.content, params.MaterialId[2])

    let currentIndexMaterial = ListMaterialDetail.content.map(item => item.id).indexOf(materialDetail.id)
    let nextIDMaterial = ListMaterialDetail.content[currentIndexMaterial + 1]?.id

    return (
        <div className='mt-5 grid grid-cols-3 gap-10'>
            <div className='col-span-1'>
                {ListMaterialDetail.content.map((item, index) => (
                    <div key={index} className='border-b-2 border-[#2B2B2B] pb-5'>
                        <Link href={`${item.id}`}>
                            <h1 className='text-2xl font-general-sans-medium'>{`${params.MaterialId[1]}.${index + 1}`} {item.heading}</h1>
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
                    : <Link href={`${nextIDMaterial}`}>
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
    )
}
