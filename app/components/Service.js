'use client';

import Image from 'next/image';
import add from '@/public/add.svg';
import minus from '@/public/minus.svg';
import { azeret } from '@/app/common/FontConstants';
import { useState } from 'react';

export default function Service({ text, details }) {
  const [isHidden, setIsHidden] = useState(true);
  const [animate, setAnimate] = useState(false);

  const handleExpansion = () => {
    setIsHidden((hid) => !hid);
    setAnimate(true);
  };
  return (
    <>
      <div
        className={`bg-white border-tertiary-200 rounded-4xl p-6 transition-all duration-500 ease-in-out ${
          isHidden
            ? 'h-20 max-sm:h-32 max-sm:rounded-3xl max-sm:py-3 max-sm:flex max-sm:flex-col max-sm:justify-center'
            : 'h-72 flex flex-col'
        }`}
      >
        <div className='flex gap-4 items-center justify-between px-6 max-sm:px-3 max-sm:gap-3'>
          <strong className={`${azeret.className} text-lg max-sm:text-base`}>
            {text}
          </strong>
          {!isHidden ? (
            <Image
              src={minus}
              alt='plus-minus'
              onClick={handleExpansion}
              className={`${animate && 'animate-wiggle'} cursor-pointer`}
              onAnimationEnd={() => setAnimate(false)}
            />
          ) : (
            <Image
              src={add}
              alt='plus-minus'
              onClick={handleExpansion}
              className={`${animate && 'animate-wiggle'} cursor-pointer`}
              onAnimationEnd={() => setAnimate(false)}
            />
          )}
        </div>

        <div
          className={`px-16 max-sm:px-8 py-4 transition-all duration-1000 ease-out ${
            isHidden ? 'hidden opacity-0' : 'opacity-100 overflow-y-auto'
          }`}
        >
          <ul className='list-disc'>
            {details?.map((detail, index) => (
              <li key={index} className='text-base'>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
