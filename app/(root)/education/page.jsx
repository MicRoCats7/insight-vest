import Image from 'next/image'
import React from 'react'
import purpleEllipse from "@/public/assets/education/purpler_ellipse.png"
import { getAllEducation } from '@/constants/education';
import CardLearning from '@/components/shared/CardLearning';

export default function page() {
    const specialIndexes = [1, 2, 5];

    return (
        <section className="wrapper pb-20">
            <div style={{
                backgroundImage: "url('/assets/education/bg_noise_&_texture_education.png')",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: -1,
            }}></div>
            <Image
                src={purpleEllipse}
                alt='purple ellipse'
                className='w-screen absolute left-0 top-0 z-[-1]'
            />

            <div className='mt-24 mb-20'>
                <h1 className='leading-[50px] h-28 w-full whitespace-pre-line text-[55px] font-general-sans-semibold text-center bg-gradient-to-r from-[#FFFFFF80] via-white to-[#FFFFFF80] inline-block text-transparent bg-clip-text'>
                    {`Explore the World of Investment
                    with the Right Insights`}
                </h1>
                <p className='mt-5 text-2xl text-center opacity-60'>We guide you to understand the risks, opportunities and smart ways to invest.</p>
            </div>

            <div className='grid grid-cols-2 gap-5'>
                {getAllEducation.map((item, index) => (
                    <CardLearning key={index} item={item} isSpecial={specialIndexes.includes(index)} />
                ))}
            </div>
        </section>
    )
}
