import { azeret } from '@/app/common/FontConstants';
import Discover from './Discover';
import NavigationWithLogo from './NavigationWithLogo';
import union from '@/public/union01.svg';
import Image from 'next/image';

const svgStyle = {
  visibility: 'hidden',
  position: 'absolute',
};
export default function FirstSection() {
  return (
    <div className='min-h-content bg-primary-100 flex flex-col items-center border-b-tertiary-200'>
      <NavigationWithLogo />
      <Discover />
      <div className='w-[100%] bg-tertiary-200 relative mt-2 max-lg:mt-8 max-sm:mt-20'>
        <Image src={union} alt='section-break' />
        <p
          className={`${azeret.className} text-sm max-lg:text-xs w-[90%] lg:w-[80%] xl:w-[75%] absolute top-[30%] sm:max-lg:top-[10%] max-sm:-top-[30%] lg:max-xl:left-[10%] xl:left-[13%] left-[5%]`}
        >
          {'//A design and data services company with solutions for you//'}
        </p>
      </div>
    </div>
  );
}