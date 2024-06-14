import Image from 'next/image';
import { takino, azeret } from '@/app/common/FontConstants';
import eye from '@/public/eye-left.svg';
import tm from '@/public/tm.svg';
import downArrow from '@/public/down-arrow.svg';
import Link from 'next/link';

export default function Landing() {
  return (
    <>
      <div>
        <p
          className={`${takino.variable} font-takino text-10xl max-sm:text-8xl max-xs:text-5xl relative text-center mt-10 max-sm:mt-40 max-xs:mt-36`}
        >
          CYCL
          <span className='rotate-90 inline-block -translate-x-0.9 max-sm:-translate-x-0.6 max-xs:-translate-x-0.5 -translate-y-3 max-sm:-translate-y-0.6 max-xs:-translate-y-0.5 relative'>
            O
            <Image
              src={eye}
              alt='eye'
              className='absolute top-[26%] max-sm:top-[6%] max-xs:top-[9%] left-[15.5%] max-sm:left-[4.5%] max-xs:left-[7.5%] h-20 w-20 animate-blink-x max-sm:h-16 max-sm:w-16 max-xs:h-12 max-xs:w-12'
            />
          </span>
          P
          <span className='rounded-full border-black absolute top-[10%] max-sm:hidden left-[98%] h-8 w-8 max-sm:w-5 max-sm:h-5 border-2 flex items-center justify-center'>
            <Image src={tm} alt='tm' className='max-sm:h-3 max-sm:w-3' />
          </span>
        </p>
        <p
          className={`${azeret.className} text-center -mt-12 max-sm:mt-8 text-sm -ml-2 max-xs:text-xs`}
        >
          {'//A design and data services company with solutions for you//'}
        </p>
      </div>
      <Link
        href='/home'
        className='animate-bounce mt-20 max-sm:mt-32 max-xs:mt-28'
      >
        <Image
          src={downArrow}
          alt='arrow'
          className='max-sm:h-12 max-sm:w-12'
        />
      </Link>
    </>
  );
}
