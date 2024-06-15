'use client';
import Image from 'next/image';
import hamburger from '@/public/hamburger.svg';
import cross from '@/public/cross.svg';
import { useState } from 'react';
import { useNav } from './NavContext';

export default function Hamburger() {
  const { isNavOpen, setIsNavOpen } = useNav();
  const [animate, setAnimate] = useState(false);

  const handleClick = (item) => {
    setIsNavOpen(item !== 'cross');
    setAnimate(true);
  };

  return (
    <>
      <div
        className={`${isNavOpen ? 'hidden' : 'block'} ${
          animate && 'animate-wiggle-reverse'
        } relative w-5 h-4 cursor-pointer hover:scale-110`}
        onClick={() => handleClick('ham')}
        onAnimationEnd={() => setAnimate(false)}
      >
        <Image src={hamburger} alt='hamburger' />
      </div>
      <div
        className={`${isNavOpen ? 'block' : 'hidden'} ${
          animate && 'animate-wiggle'
        } relative w-5 h-5 cursor-pointer hover:scale-110`}
        onClick={() => handleClick('cross')}
        onAnimationEnd={() => setAnimate(false)}
      >
        <Image src={cross} alt='cross' />
      </div>
    </>
  );
}
