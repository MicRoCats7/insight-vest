"use client";
import arrow from '@/public/assets/home/arrow-text.svg';
import circle_invest from '@/public/assets/home/circle_invest.svg';
import Image from 'next/image';
import { MdKeyboardArrowRight } from "react-icons/md";
import CardLearning from '@/components/shared/CardLearning';
import { getLearning, getSaham } from '@/constants/home';
import CardListSaham from '@/components/shared/CardListSaham';
import { getMustReadNews } from "@/constants/news";
import { animate, motion, useMotionValue } from "framer-motion"
import { useEffect } from 'react';
import useMeasure from 'react-use-measure';
import MustReadNewsGrid from '@/components/shared/MustReadNewsGrid';

export default function Home() {
  const specialIndexes = [1, 2, 5];

  useEffect(() => {
    const gradient = document.querySelector('#gradient1');

    let percentage = 0;

    const animateGradient = () => {
      // Update the gradient positions to simulate a flash moving diagonally
      percentage += 2; // Increase the percentage for faster movement

      if (percentage > 100) {
        percentage = 0; // Reset percentage when it reaches 100
      }

      // Set new positions for the gradient to create a diagonal flash
      gradient.setAttribute('x1', `${percentage}%`);
      gradient.setAttribute('y1', `${100 - percentage}%`);
      gradient.setAttribute('x2', `${100 - percentage}%`);
      gradient.setAttribute('y2', `${percentage}%`);

      // Use requestAnimationFrame for smooth animation
      requestAnimationFrame(animateGradient);
    };

    animateGradient();
  }, []);

  // infinite scroll
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 3 + 305

    controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0
    })

    return controls.stop
  }, [xTranslation, width])

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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05 },
  };

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
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
            y: -25,
          }}
          animate={{
            x: -32,
            y: -16,
            opacity: 100,
          }}
          transition={{
            delay: 1.5
          }}
        >
          <svg className='absolute md:hidden lg:block hidden pointer-events-none' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFF" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
                <stop offset="100%" stopColor="#FFF" />
              </linearGradient>
              <filter id="filter0_f_37_9" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_37_9" />
              </filter>
            </defs>

            <g filter="url(#filter0_f_37_9)">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 24C15.0457 24 24 15.0457 24 4C24 15.0457 32.9543 24 44 24C32.9543 24 24 32.9543 24 44C24 32.9543 15.0457 24 4 24Z" fill="url(#gradient1)" />
            </g>
          </svg>
        </motion.div>
        <motion.h1
          className='font-general-sans-semibold md:text-[70px] text-[35px] lg:w-2/3 w-full special-text md:leading-[81px] relative'
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
        >
          Unlock Financial Wisdom, Invest with Insight
          <Image
            src={arrow}
            alt="arrow"
            className='absolute -bottom-3 left-[62%] transform -translate-x-1/2 md:hidden lg:block hidden'
            style={{ pointerEvents: 'none' }}
          />
        </motion.h1>
      </div>
      <motion.p
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
        className='lg:w-3/5 font-general-sans-regular md:text-xl text-base text-[#ffffff60] my-10'>
        An investment education platform that provides complete guidance to help you invest smartly in various instruments, Such as shares, Gold, Deposits, Mutual funds, Crypto and property.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 100, y: 0 }} transition={{ delay: 0.5 }} className='flex items-center justify-between bg-[#9E33D7] lg:w-[18%] md:w-[28%] w-full rounded-[10px] cursor-pointer'>
        <span className='pl-[15px] py-[7px] font-general-sans-semibold'>Explore and Learn</span>
        <div className='bg-[#7A1CAC] p-2 rounded-r-[10px]'>
          <MdKeyboardArrowRight size={25} />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.1 }} animate={{ opacity: 100, scale: 1 }} transition={{ delay: 0.9 }} className='relative md:my-[100px] my-[50px] flex justify-center items-center flex-col'>
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
      </motion.div>

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

      <div className="overflow-hidden relative h-[250px] w-full">
        <motion.div className="flex absolute left-0 items-center gap-[20px] w-[4170px] h-full" ref={ref}
          style={{ x: xTranslation }}
        >
          {[...getSaham, ...getSaham, ...getSaham].map((item, index) => (
            <CardListSaham
              key={index}
              item={item}
            />
          ))}
        </motion.div>
      </div>

      <div className="mb-[100px]">
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
    </section>
  );
}
