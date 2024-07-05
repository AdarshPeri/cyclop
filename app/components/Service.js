'use client';

import Image from 'next/image';
import add from '@/public/add.svg';
import minus from '@/public/minus.svg';
import { azeret } from '@/app/common/FontConstants';
import { useEffect, useState } from 'react';
import { useService } from './ServiceContext';

export default function Service({ text, details, serviceIndex }) {
  const [isHidden, setIsHidden] = useState(true);
  const [isServiceClosed, setIsServiceClosed] = useState(true);
  const [animate, setAnimate] = useState(false);
  const { openServiceIndex, setOpenServiceIndex } = useService();

  const handleExpansion = (index) => {
    // setIsHidden((hid) => !hid);
    setOpenServiceIndex(index);
    setAnimate(true);
  };

  // useEffect(() => {
  //   if (isHidden) setOpenServiceIndex(null);
  //   else setOpenServiceIndex(serviceIndex);
  // }, [isHidden, serviceIndex, setOpenServiceIndex]);

  useEffect(() => {
    setIsServiceClosed(
      openServiceIndex === null || openServiceIndex !== serviceIndex
    );
  }, [openServiceIndex, serviceIndex]);

  return (
    <>
      <div
        className={`bg-white border-tertiary-200 rounded-4xl p-6 transition-all duration-500 ease-in-out ${
          isServiceClosed
            ? 'h-20 max-sm:h-32 max-sm:rounded-3xl max-sm:py-3 max-sm:flex max-sm:flex-col max-sm:justify-center'
            : 'h-72 flex flex-col'
        }`}
      >
        <div className='flex gap-4 items-center justify-between px-6 max-sm:px-3 max-sm:gap-3 mb-2'>
          <strong className={`${azeret.className} text-lg max-sm:text-base`}>
            {text}
          </strong>
          {!isServiceClosed ? (
            <Image
              src={minus}
              alt='plus-minus'
              onClick={() => handleExpansion(null)}
              className={`${animate && 'animate-wiggle'} cursor-pointer`}
              onAnimationEnd={() => setAnimate(false)}
            />
          ) : (
            <Image
              src={add}
              alt='plus-minus'
              onClick={() => handleExpansion(serviceIndex)}
              className={`${animate && 'animate-wiggle'} cursor-pointer`}
              onAnimationEnd={() => setAnimate(false)}
            />
          )}
        </div>

        <div
          className={`px-16 max-sm:px-8 pb-4 transition-all duration-1000 ease-out ${
            isServiceClosed ? 'hidden opacity-0' : 'opacity-100 overflow-y-auto'
          }`}
        >
          <ul className='list-disc first:mt-0'>
            {details?.map((detail, index) => (
              <li key={index} className='text-base my-3'>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
