import Image from 'next/image';
import eye from '@/public/eye.svg'

export default function Footer() {
  return (
    <div className='bg-alternate-50 min-h-fit text-tertiary-200 flex flex-col items-center'>
      <div className='flex w-[90%] lg:w-[80%] xl:w-[75%] justify-end'>
        <div className='grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4'>
          <p className='underline text-xl max-tablet:text-base'>SERVICES</p>
          <p className='underline text-xl max-tablet:text-base'>REQUEST DEMO</p>
          <p className='underline text-xl max-tablet:text-base'>WHY CYCLOP</p>
          <p className='underline text-xl max-tablet:text-base'>GET IN TOUCH</p>
        </div>
      </div>
      <div className='flex w-[90%] lg:w-[80%] xl:w-[75%] justify-start text-secondary-50 max-tablet:text-sm max-sm:mt-4'>
        <p>
            Cyclop Design & Data services <br/>
            abc@gmail.com <br/>
            9876543210
        </p>
      </div>
      <div className='flex w-[90%] lg:w-[80%] xl:w-[75%] justify-between items-center py-10 max-tablet:text-sm max-sm:flex-col-reverse max-sm:items-start max-sm:gap-6'>
        <p className='max-sm:text-sm'>© 2024 Cyclop Design & Data. All rights reserved.</p>
        <Image src={eye} alt='eye' className='animate-blink'/>
      </div>  
    </div>
  );
}