import { azeret } from '@/app/common/FontConstants';
import section1 from '@/public/sec1mob.svg';
import union from '@/public/union01.svg';
import Discover from './Discover';
import NavigationWithLogo from './NavigationWithLogo';

import Image from 'next/image';
import FullPageNav from './FullPageNav';

export default function FirstSection() {
  return (
    <div className='min-h-content bg-primary-100 flex flex-col items-center border-b-tertiary-200 relative'>
      <NavigationWithLogo />
      <FullPageNav />
      <Discover />
      <div className='w-[100dvw] bg-tertiary-200 relative mt-2 sm:max-md:mt-4 max-lg:mt-8 max-sm:mt-20 overflow-visible'>
        <Image src={union} alt='section-break' className='max-sm:hidden overflow-visible' />
        <Image
          src={section1}
          alt='section-break'
          className='max-sm:block hidden overflow-visible'
        />
        <p
          className={`${azeret.className} text-sm leading-6 w-[90%] lg:w-[80%] xl:w-[75%] absolute top-[30%]   sm:max-lg:top-[10%] max-sm:-top-[30%] lg:max-xl:left-[10%] xl:left-[13%] left-[5%]`}
        >
          {'//A design and data services company with solutions for you//'}
        </p>
      </div>
    </div>
  );
}
