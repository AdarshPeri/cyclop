'use client';

import audio from '@/public/audio.svg';
import eye from '@/public/eye.svg';
import Image from 'next/image';

import logo from '@/public/Logo.svg';

export default function About() {
  const sound = new Audio('/cyclop.wav');
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
      <Image src={audio} alt='audio' onClick={() => sound.play()} className='self-start'/>
    </div>
  );
}
