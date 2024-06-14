import star from '@/public/star.svg';
import Image from 'next/image';
import { rubik } from '@/app/common/FontConstants';

export default function Discover() {
  return (
    <div className='bg-alternate-50 w-[90%] lg:w-[80%] xl:w-[75%] h-120 max-lg:h-96 border-alternate-50 rounded-3xl grid grid-cols-2 p-24 max-lg:p-12 gap-2 mt-10 max-sm:grid-cols-1 max-sm:p-10 max-sm:h-120'>
      <div className='justify-self-start'>
        <p className='text-white text-3xl max-xl:text-2xl max-sm:mb-16'>
          Discover the ideal fusion of artistry and technology with us.
        </p>
        <div className='hidden max-sm:block h-20 w-20 max-sm:mb-16'>
          <Image src={star} alt='star' />
        </div>
        <button
          className={`${rubik.className} mt-20 bg-secondary-50 rounded-full h-20 p-8 text-base uppercase flex items-center max-sm:mt-0`}
        >
          Request Demo
        </button>
      </div>
      <div className='justify-self-end max-sm:hidden'>
        <Image src={star} alt='star' />
      </div>
    </div>
  );
}
