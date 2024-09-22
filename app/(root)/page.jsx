"use client";
import star from '@/public/assets/home/star.svg';
import arrow from '@/public/assets/home/arrow-text.svg';
import circle_invest from '@/public/assets/home/circle_invest.svg';
import Image from 'next/image';
import { MdKeyboardArrowRight } from "react-icons/md";
import CardLearning from '@/components/shared/CardLearning';
import { getLearning, getSaham } from '@/constants/home';
import CardListSaham from '@/components/shared/CardListSaham';
import { getMustReadNews } from "@/constants/news";
import Loading from '@/components/shared/Loading';

export default function Home() {
  const specialIndexes = [1, 2, 5];

  return (
    <section
      className="md:wrapper wrapper-mobile"
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
      }} />

      <div className='lg:mt-[100px] md:mt-[50px] mt-[15px] relative'>
        <Image
          src={star}
          alt="star"
          className='absolute -left-8 -top-4 transform rotate-180 md:hidden lg:block hidden'
          style={{ pointerEvents: 'none' }}
        />
        <h1 className='font-general-sans-semibold md:text-[70px] text-[35px] lg:w-2/3 w-full special-text md:leading-[81px] relative'>
          Unlock Financial Wisdom, Invest with Insight
          <Image
            src={arrow}
            alt="arrow"
            className='absolute -bottom-3 left-[62%] transform -translate-x-1/2 md:hidden lg:block hidden'
            style={{ pointerEvents: 'none' }}
          />
        </h1>
      </div>
      <p className='lg:w-3/5 font-general-sans-regular md:text-xl text-base text-[#ffffff60] my-10'>
        An investment education platform that provides complete guidance to help you invest smartly in various instruments, Such as shares, Gold, Deposits, Mutual funds, Crypto and property.
      </p>
      <div className='flex items-center justify-between bg-[#9E33D7] lg:w-[18%] md:w-[28%] w-full rounded-[10px] cursor-pointer'>
        <span className='pl-[15px] py-[7px] font-general-sans-semibold'>Explore and Learn</span>
        <div className='bg-[#7A1CAC] p-2 rounded-r-[10px]'>
          <MdKeyboardArrowRight size={25} />
        </div>
      </div>

      <div className='relative md:my-[100px] my-[50px] flex justify-center items-center flex-col'>
        <Image
          src={circle_invest}
          alt="circle_invest"
          style={{ pointerEvents: 'none' }}
        />
        <h1
          className='font-general-sans-semibold lg:text-[48px] md:text-[35px] text-[12px] text-center w-[55%] special-text absolute'
        >
          All Investment Knowledge, Only on One Platform!
        </h1>
      </div>

      <div className='flex flex-col gap-5'>
        <h1 className='special-text font-general-sans-semibold md:text-[30px] text-[20px]'>Start learning to invest with us</h1>
        <div className='md:grid md:grid-cols-2 flex flex-col gap-5'>
          {getLearning.map((item, index) => (
            <CardLearning
              key={index}
              item={item}
              isSpecial={specialIndexes.includes(index)}
              isOdd={index % 2 !== 0}
            />
          ))}
        </div>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-[60px]'>
        {getSaham.map((item, index) => (
          <CardListSaham
            key={index}
            item={item}
          />
        ))}
      </div>

      <div className="mb-[100px]">
        <h1 className="special-text font-general-sans-semibold md:text-3xl text-2xl mb-5">Investment News</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 grid-rows-2 gap-2.5">
          {getMustReadNews.map((news, index) => {
            if (index != 2) {
              return (
                <div key={news.id} className={`relative col-span-1`}>
                  <Image
                    className={`md:mb-5 mb-2 md:w-[270px] w-full md:h-[180px] h-[150px] rounded-[20px]`}
                    src={news.thumbnail}
                    alt={news.title}
                  />
                  <p className="md:mb-5 mb-2 md:text-[22px] text-sm leading-6 font-general-sans-semibold">{news.title}</p>
                  <p className="font-general-sans-medium md:text-base text-xs opacity-60">{news.date}</p>
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
                    <p className="mb-5 md:text-[22px] text-base font-general-sans-semibold">{news.title}</p>
                    <p className="font-general-sans-medium md:text-base text-sm opacity-60">{news.date}</p>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </section>
  );
}
