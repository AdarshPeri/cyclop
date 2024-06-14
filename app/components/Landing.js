import { azeret } from '@/app/common/FontConstants';
import eye from '@/public/eye.svg';
import Image from 'next/image';
import logo from '@/public/Logo.svg';
import downArrow from '@/public/down-arrow.svg';
import Link from 'next/link';

export default function Landing() {
  return (
    <>
      <div className='w-[90%]'>
      <div className='flex justify-center mt-10 max-sm:mt-40 max-xs:mt-36'>
      <div className='relative max-sm:hidden'>
        <Image src={logo} alt='logo'/>
        <Image src={eye} alt='eye' className='absolute top-[31%] left-[67%] w-24 animate-blink'/>
      </div>
      <div className='relative sm:hidden'>
        <Image src={logo} alt='logo' className='max-sm:h-20 max-sm:w-96'/>
        <Image src={eye} alt='eye' className='absolute top-[34%] left-[67%] w-12 animate-blink'/>
      </div>
      </div>


        <p
          className={`${azeret.className} text-center mt-12 max-sm:mt-8 text-sm -ml-2 max-xs:text-xs`}
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
