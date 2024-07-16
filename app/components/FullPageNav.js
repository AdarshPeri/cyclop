'use client';

import eye from '@/public/eye.svg';
import minus from '@/public/yellowMinus.svg';
import plus from '@/public/yellowPlus.svg';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { azeret, rubik } from '../common/FontConstants';
import { useNav } from './NavContext';

export default function FullPageNav() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { isNavOpen, setIsNavOpen } = useNav();

  const handleClick = () => {
    setIsContactOpen(!isContactOpen);
    setAnimate(true);
  };

  return (
    <div
      className={`${
        !isNavOpen ? 'hidden opacity-0' : 'opacity-100 no-doc-scroll'
      } transition-all duration-500 fixed min-h-screen min-w-[100vw] bg-alternate-50 top-0 left-0 z-40`}
    >
      <div className='w-[90%] lg:w-[80%] xl:w-[75%]'>
        <ul
          className={` ${rubik.className} text-tertiary-200 text-2xl max-md:text-xl lg:text-3xl absolute top-1/4 left-[15%] lg:left-[15%] max-sm:top-[15%] md:left-[9%]`}
        >
          <Link href='/home' onClick={() => setIsNavOpen(false)}>
            <li className='py-4 border-b-2 border-dashed border-b-tertiary-200/10 cursor-pointer hover:text-secondary-50'>
              HOME
            </li>
          </Link>
          <Link href='/services' onClick={() => setIsNavOpen(false)}>
            <li className='py-4 border-b-2 border-dashed border-b-tertiary-200/10 cursor-pointer hover:text-secondary-50'>
              SERVICES
            </li>
          </Link>
          <Link href='/why-cyclop' onClick={() => setIsNavOpen(false)}>
            <li className='py-4 border-b-2 border-dashed border-b-tertiary-200/10 cursor-pointer hover:text-secondary-50'>
              WHY CYCLOP
            </li>
          </Link>
          <Link href='/grow-your-brand' onClick={() => setIsNavOpen(false)}>
            <li className='py-4 border-b-2 border-dashed border-b-tertiary-200/10 cursor-pointer hover:text-secondary-50'>
              SOLUTIONS
            </li>
          </Link>
          <li className='py-4 flex justify-between items-center w-[60vw] cursor-pointer hover:text-secondary-50'>
            <span href='/contact-us' onClick={handleClick}>
              CONTACT US
            </span>
            {!isContactOpen ? (
              <Image
                src={plus}
                alt='plus'
                onClick={handleClick}
                className={`${animate && 'animate-wiggle'} cursor-pointer`}
                onAnimationEnd={() => setAnimate(false)}
              />
            ) : (
              <Image
                src={minus}
                alt='minus'
                onClick={handleClick}
                className={`${animate && 'animate-wiggle'} cursor-pointer`}
                onAnimationEnd={() => setAnimate(false)}
              />
            )}
          </li>
          <li
            className={`${
              isContactOpen ? 'flex opacity-100' : 'hidden opacity-0'
            } ${
              azeret.className
            } py-1 flex-col gap-3 max-sm:gap-1 text-base max-sm:text-sm h-20 transition-all duration-500 ease-out`}
          >
            <Link href='/join-us' onClick={() => setIsNavOpen(false)}>
              Join Our Team
            </Link>
            <Link href='/request-demo' onClick={() => setIsNavOpen(false)}>
              Request Demo
            </Link>
            <Link href='/contact-us' onClick={() => setIsNavOpen(false)}>
              Get In Touch
            </Link>
          </li>
        </ul>
        <div className='flex w-[85%] lg:w-[72%] md:justify-between md:items-end md:left-[9%] lg:left-[15%] text-tertiary-200 absolute top-[80%] left-[15%] max-sm:gap-20 max-xs:gap-16'>
          <div className='flex max-sm:flex-col max-sm:gap-3 gap-6 max-xs:text-xs text-tertiary-100'>
            <span className='underline cursor-pointer hover:text-secondary-50'>
              {'Privacy Policy >'}
            </span>
            <span className='underline cursor-pointer hover:text-secondary-50'>
              {'Cookie Settings >'}
            </span>
          </div>
          <Image
            src={eye}
            alt='eye'
            className='animate-blink max-sm:w-16 max-sm:mt-4 place-items-center'
          />
        </div>
      </div>
    </div>
  );
}
