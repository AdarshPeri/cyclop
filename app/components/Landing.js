import { azeret, rubik } from '@/app/common/FontConstants';

import rightArrow from '@/public/ArrowCircleRight.svg';
import Image from 'next/image';
import Link from 'next/link';
import About from './About';

export default function Landing() {
  return (
    <>
      <div className='w-[90%] lg:w-[80%] xl:w-[75%]'>
        <About />
        <p className='flex gap-10 mt-1'>
          <strong>{`/ˈsī-ˌkläp/`}</strong>
          <span>{'/noun/'}</span>
        </p>
        <p className={`${azeret.className} text-left mt-8 max-xs:text-sm `}>
          Welcome to Cyclop, a <strong>{'//design and data company//'}</strong>{' '}
          where innovation meets insight with a <strong>singular vision</strong>{' '}
          dedicated to transforming complex information into actionable
          solutions. <br />
          <br />
          <br />
                    <strong>Cyclop`s all-seeing eye</strong> specializes in crafting
          compelling visual narratives and harnessing the power of data
          analytics to drive strategic decisions.
          <br />
          <br />
          <br /> Our multidisciplinary team combines expertise in design, data
          science, and technology to deliver cutting-edge solutions that empower
          businesses to thrive in the digital age while keeping a{' '}
          <strong>sharp focus</strong> on your goals.
        </p>
      </div>
      <div className='w-[90%] lg:w-[80%] xl:w-[75%]'>
        <Link
          href='/home'
          className='flex px-6 py-2 md:py-6 bg-secondary-50 rounded-4xl items-center justify-between uppercase md:w-[40%] lg:w-[30%] mb-3'
        >
          <p className={`${rubik.className}`}>Enter website</p>
          <Image
            src={rightArrow}
            alt='arrow'
            className='max-sm:h-12 max-sm:w-12 inline-block animate-bounce'
          />
        </Link>
      </div>
    </>
  );
}
