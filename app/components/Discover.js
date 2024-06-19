import star from '@/public/star.svg';
import Image from 'next/image';
import rightArrow from '@/public/ArrowCircleRight.svg';
import { rubik } from '@/app/common/FontConstants';
import Link from 'next/link';

export default function Discover() {
  return (
    <div className='bg-alternate-50 w-[90%] lg:w-[80%] xl:w-[75%] h-120 max-lg:h-96 border-alternate-50 rounded-3xl grid grid-cols-2 p-24 max-lg:p-12 gap-2 mt-10 max-sm:grid-cols-1 max-sm:p-10 max-sm:h-120'>
      <div className='justify-self-start max-sm:mr-7'>
        <strong className='text-white text-3xl max-xl:text-2xl max-sm:mb-12 block'>
          Discover the ideal fusion of artistry and technology with us.
        </strong>
        <div className='hidden max-sm:block h-20 w-20 max-sm:mb-12'>
          <Image src={star} alt='star' className='animate-spin' />
        </div>
        <Link href='/request-demo'>
          <button
            className={`${rubik.className} mt-20 bg-secondary-50 w-[70dvw] md:w-[37dvw] lg:w-[21dvw] rounded-full h-20 p-5 text-base uppercase flex justify-between gap-3 items-center max-sm:mt-0`}
          >
            <span className='max-sm:text-sm'>Request Demo</span>
            <Image src={rightArrow} alt='arrow' className='animate-bounce max-sm:h-12 max-sm:w-12 inline-block' />
          </button>
        </Link>
      </div>
      <div className='justify-self-end max-sm:hidden'>
        <Image src={star} alt='star' className='animate-spin' />
      </div>
    </div>
  );
}
