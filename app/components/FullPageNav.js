'use client';

import eye from '@/public/eye.svg';
import plus from '@/public/yellowPlus.svg';
import minus from '@/public/yellowMinus.svg';

import Image from 'next/image';
import { useState } from 'react';
import { useNav } from './NavContext';

export default function FullPageNav() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { isNavOpen } = useNav();

  const handleClick = () => {
    setIsContactOpen(!isContactOpen);
    setAnimate(true);
  };

  return (
    <div
      className={`${
        !isNavOpen ? 'hidden opacity-0' : 'opacity-100'
      } transition-all duration-500 fixed min-h-screen min-w-[100vw] bg-alternate-50 top-0 left-0 z-40 overflow-hidden overscroll-contain`}
    >
      <div className='w-[90%] lg:w-[80%] xl:w-[75%]'>
        <ul className='text-tertiary-200 text-2xl lg:text-3xl absolute top-1/4 left-[15%] lg:left-[15%] max-sm:top-[15%] md:left-[9%]'>
          <li className='py-3 border-b-2 border-dashed border-b-tertiary-200/10'>
            ABOUT US
          </li>
          <li className='py-3 border-b-2 border-dashed border-b-tertiary-200/10'>
            SERVICES
          </li>
          <li className='py-3 border-b-2 border-dashed border-b-tertiary-200/10'>
            WHY CYCLOP
          </li>
          <li className='py-3 border-b-2 border-dashed border-b-tertiary-200/10'>
            SOLUTIONS
          </li>
          <li className='py-3 flex justify-between w-[60vw]'>
            <span>CONTACT US</span>
            {!isContactOpen ? (
              <Image
                src={plus}
                alt='plus'
                onClick={handleClick}
                className={`${animate && 'animate-wiggle'}`}
                onAnimationEnd={() => setAnimate(false)}
              />
            ) : (
              <Image
                src={minus}
                alt='minus'
                onClick={handleClick}
                className={`${animate && 'animate-wiggle'}`}
                onAnimationEnd={() => setAnimate(false)}
              />
            )}
          </li>
          <li
            className={`${
              isContactOpen ? 'flex opacity-100' : 'hidden opacity-0'
            } py-2 max-sm:py-1 flex-col gap-3 max-sm:gap-1 text-base h-20 transition-all duration-500 ease-out`}
          >
            <span>Join Our Team</span>
            <span>Request Demo</span>
            <span>Get In Touch</span>
          </li>
        </ul>
        <div className='flex flex-col w-[85%] lg:w-[72%] md:flex-row md:justify-between md:items-end md:left-[9%] lg:left-[15%] text-tertiary-200 absolute top-[75%] left-[15%] max-sm:gap-2 max-sm:top-[71%]'>
          <div className='flex max-sm:flex-col gap-6'>
            <span className='underline cursor-pointer'>
              {'Privacy Policy >'}
            </span>
            <span className='underline cursor-pointer'>
              {'Cookie Settings >'}
            </span>
          </div>
          <Image
            src={eye}
            alt='eye'
            className='animate-blink max-sm:w-16 max-sm:mt-4'
          />
        </div>
      </div>
    </div>
  );
}
