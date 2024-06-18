'use client';
import logo from '@/public/Logo.svg';
import logoLight from '@/public/logo-white.svg';

import eye from '@/public/eye.svg';
import facebook from '@/public/facebook.svg';
import instagram from '@/public/instagram.svg';
import linkedin from '@/public/linkedin.svg';

import Image from 'next/image';
import Hamburger from './Hamburger';
import { useNav } from './NavContext';
import Link from 'next/link';

export default function NavigationWithLogo() {
  const { isNavOpen } = useNav();
  return (
    <div
      className={`${
        isNavOpen
          ? 'bg-alternate-200 border-alternate-50 fixed'
          : 'bg-primary-50 border-primary-100 relative'
      } flex p-6 max-xs:p-4 items-center gap-6 h-20 border  w-[90%] lg:w-[80%] xl:w-[75%] mt-16 max-sm:mt-4 mx-auto rounded-lg z-50`}
    >
      <Hamburger />
      <Link href='/' className='relative'>
        <Image
          src={isNavOpen ? logoLight : logo}
          alt='logo'
          className='h-10 w-36 transition-colors duration-500'
        />
        <Image
          src={eye}
          alt='eye'
          className='absolute top-[38%] left-[67.5%] xl:left-[68%] w-4 max-xs:top-[39%] max-xs:left-[67%] animate-blink'
        />
      </Link>
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
