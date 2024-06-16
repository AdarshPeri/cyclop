'use client';
import facebook from '@/public/facebook.svg';
import instagram from '@/public/instagram.svg';
import linkedin from '@/public/linkedin.svg';


import Image from 'next/image';
import Hamburger from './Hamburger';
import { useNav } from './NavContext';
export default function Navigation() {
  const { isNavOpen } = useNav();

  return (
    <div
      className={`${
        isNavOpen
          ? 'bg-alternate-200 border-alternate-50'
          : 'bg-primary-50 border-primary-100'
      } flex p-6 max-xs:p-4 items-center gap-6 h-20 border  w-[90%] lg:w-[80%] xl:w-[75%] mt-16 max-sm:mt-4 mx-auto rounded-lg relative z-50`}
    >
      <Hamburger />
      <SocialMedia />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className='relative flex gap-1 ml-auto'>
      <div className='rounded-full flex h-8 w-8 items-center justify-center bg-primary-100 cursor-pointer'>
        <div className='h-4 w-4'>
          <Image src={facebook} alt='facebook' />
        </div>
      </div>
      <div className='rounded-full flex h-8 w-8 items-center justify-center bg-primary-100 cursor-pointer'>
        <div className='h-4 w-4 self-center'>
          <Image src={linkedin} alt='linkedin' />
        </div>
      </div>
      <div className='rounded-full flex h-8 w-8 items-center justify-center bg-primary-100 cursor-pointer'>
        <div className='h-4 w-4 self-center'>
          <Image src={instagram} alt='instagram' />
        </div>
      </div>
    </div>
  );
}
