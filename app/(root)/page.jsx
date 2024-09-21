"use client";
import star from '@/public/assets/home/star.svg';
import arrow from '@/public/assets/home/arrow-text.svg';
import circle_invest from '@/public/assets/home/circle_invest.svg';
import Image from 'next/image';
import { MdKeyboardArrowRight } from "react-icons/md";
import CardLearning from '@/components/shared/CardLearning';
import { getLearning } from '@/constants/home';
import CardListSaham from '@/components/shared/CardListSaham';

export default function Home() {
  const specialIndexes = [1, 2, 5];

  return (
    <section
      className="wrapper"
    >
      <div style={{
        backgroundImage: "url('/assets/home/bg-noise-home.png')",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1,
      }}></div>
      <div className='mt-[100px] relative'>
        <Image
          src={star}
          alt="star"
          className='absolute -left-8 -top-4'
          style={{ pointerEvents: 'none' }}
        />
        <h1 className='font-general-sans-semibold text-[70px] w-4/5 special-text leading-[81px]'>Unlock Financial Wisdom, Invest with Insight</h1>
        <Image
          src={arrow}
          alt="arrow"
          className='absolute top-[100px] left-[35%]'
          style={{ pointerEvents: 'none' }}
        />
      </div>
      <p className='w-3/5 font-general-sans-regular text-xl text-[#ffffff60] my-10'>
        An investment education platform that provides complete guidance to help you invest smartly in various instruments, Such as shares, Gold, Deposits, Mutual funds, Crypto and property.
      </p>
      <div className='flex items-center justify-between bg-[#9E33D7] w-[18%] rounded-[10px] cursor-pointer'>
        <span className='pl-[15px] py-[7px] font-general-sans-semibold'>Explore and Learn</span>
        <div className='bg-[#7A1CAC] p-2 rounded-r-[10px]'>
          <MdKeyboardArrowRight size={25} />
        </div>
      </div>
      <div className='relative my-[100px] flex justify-center items-center flex-col'>
        <Image
          src={circle_invest}
          alt="circle_invest"
          style={{ pointerEvents: 'none' }}
        />
        <h1
          className='font-general-sans-semibold text-[48px] text-center w-[55%] special-text leading-10 absolute'
        >
          All Investment Knowledge, Only on One Platform!
        </h1>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='special-text font-general-sans-semibold text-[30px]'>Start learning to invest with us</h1>
        <div className='grid grid-cols-2 gap-5'>
          {getLearning.map((item, index) => (
            <CardLearning key={index} item={item} isSpecial={specialIndexes.includes(index)} />
          ))}
        </div>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        <CardListSaham />
        <CardListSaham />
        <CardListSaham />
        <CardListSaham />
      </div>
    </section>
  );
}
