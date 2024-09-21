"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import iconLight from '@/public/assets/education/icon light.svg';
import { getDetailEducation } from '@/constants/education';
import { usePathname } from 'next/navigation';

export default function page({ params, children }) {
    let educationDetail = getDetailEducation(params.id)
    const pathname = usePathname()
    const segments = pathname.split('/').filter(Boolean);
    const current_sub_material_id = segments[segments.length - 3];

    let titleSubMaterial = educationDetail.material.sub_material.find(sub_material => sub_material.id === current_sub_material_id)

    useEffect(() => {
        document.body.style.backgroundColor = "#191A19"
        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, [])

    return (
        <section className="wrapper pb-20">
            <div className='flex items-center gap-2.5 mt-16'>
                <Image
                    src={iconLight}
                    alt=''
                    className=''
                />
                <h1 className='special-text font-general-sans-semibold text-xl md:text-2xl lg:text-3xl'>
                    {pathname.includes('material') ? titleSubMaterial.chapter_title : educationDetail.material.title}
                </h1>
            </div>

            <div>{children}</div>
        </section>
    )
}
