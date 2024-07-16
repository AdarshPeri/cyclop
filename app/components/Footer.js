import Image from 'next/image';
import eye from '@/public/eye.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='bg-alternate-50 min-h-fit text-white flex flex-col items-center px-2'>
      <div className='flex w-[90%] lg:w-[80%] xl:w-[75%] justify-end'>
        <div className='grid grid-cols-2 gap-8 max-sm:grid-cols-1 max-sm:gap-6'>
          <Link href='/services' className='justify-self-end'>
            <strong className='underline text-xl cursor-pointer'>
              SERVICES
            </strong>
          </Link>
          <Link href='/request-demo' className='justify-self-end'>
            <strong className='underline text-xl cursor-pointer'>
              REQUEST DEMO
            </strong>
          </Link>
          <Link href='/why-cyclop' className='justify-self-end'>
            <strong className='underline text-xl cursor-pointer'>
              WHY CYCLOP
            </strong>
          </Link>
          <Link href='/contact-us' className='justify-self-end'>
            <strong className='underline text-xl cursor-pointer'>
              GET IN TOUCH
            </strong>
          </Link>
        </div>
      </div>
      <div className='flex w-[90%] lg:w-[80%] xl:w-[75%] justify-start text-secondary-50 mt-16'>
        <p className='font-bold'>
          Cyclop Design & Data <br />
          <a href='mailto:info@cyclop.com.au'>info@cyclop.com.au</a>
          <br />
          (+61) 290 721 089
        </p>
      </div>
      <div className='flex w-[90%] lg:w-[80%] xl:w-[75%] justify-between items-center py-10  max-sm:flex-col-reverse max-sm:items-start max-sm:gap-6'>
        <p className='max-sm:text-sm text-tertiary-100'>
          © 2024 Cyclop Design & Data. All rights reserved.
        </p>
        <Image src={eye} alt='eye' className='animate-blink' />
      </div>
    </div>
  );
}
