'use client';

import audio from '@/public/audio.svg';
import eye from '@/public/eye.svg';
import Image from 'next/image';
import { useRef } from 'react';

import logo from '@/public/Logo.svg';

export default function About() {
  const soundRef = useRef();
  const play = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  };

  return (
    <div className='flex max-sm:justify-between gap-2'>
      <div className='relative'>
        <Image src={logo} alt='logo' className='w-60 md:w-80' />
        <Image
          src={eye}
          alt='eye'
          className='absolute top-[34%] left-[68%] w-7 md:w-9 animate-blink'
        />
      </div>
      <Image src={audio} alt='audio' onClick={play} className='self-start' />
      <audio ref={soundRef} src='/cyclop.wav' />
    </div>
  );
}
