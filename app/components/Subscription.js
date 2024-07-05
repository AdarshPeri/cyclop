import star from '@/public/small-star.svg';
import stars from '@/public/stars.svg';

import Image from 'next/image';

import { rubik } from '../common/FontConstants';
import SubsCarousel from './SubsCarousel';
import Link from 'next/link';

export default function Subscription({ textAlign = 'right' }) {
  return (
    <div className=' w-[90%] lg:w-[80%] xl:w-[75%]'>
      <div
        className={`flex items-center ${
          textAlign === 'left' ? 'justify-start' : 'justify-end'
        } mt-20 md:justify-between`}
      >
        <p className='text-sm max-sm:hidden'>
          {'//Your visionary partner in business!//'}
        </p>
        <div className='flex items-center gap-1 self-start col-start-2 col-span-2 max-sm:self-end relative z-[1]'>
          <div className='h-4 w-4'>
            <Image src={star} alt='star' />
          </div>
          <p
            className={`${rubik.className} text-right uppercase text-2xl lg:text-3xl`}
          >
            Grow your brand
          </p>
        </div>
      </div>
      <div className='flex gap-4 mt-10 max-tablet:hidden'>
        <PriceCard
          heading={'office'}
          width='33%'
          para1={`Our Office package is perfect for startups and small businesses wanting to shine online! We develop brand identities and design eye-catching websites.`}
          para2={`Get ready for personalized attention and creative solutions that will make your business stand out!`}
        />
        <PriceCardBlack
          heading={'business'}
          width='33%'
          para1={`Our Business package turbocharges your market presence with top-tier websites, killer marketing, and sleek design.`}
          para2={`Harness cutting-edge data and predictive analytics to propel your growth goals with flair!`}
        />
        <PriceCard
          heading={'pro'}
          width='33%'
          para1={`Our Pro package offers custom apps, interactive designs, and strategic branding for leaders and innovators.`}
          para2={`Dive into advanced data solutions like machine learning and big data analytics to solve your toughest challenges and shine in a competitive world!`}
        />
      </div>
      <div className='max-tablet:block hidden mt-10'>
        <SubsCarousel slides={Array.from(Array(3).keys())} options={{}} />
      </div>
      <div className='flex mt-2 justify-center items-center lg:gap-24 gap-16 max-tablet:gap-2 max-tablet:hidden'>
        <p className='text-xs'>{'//Most Preferred package//'}</p>
        <Image src={stars} alt='stars' />
      </div>
    </div>
  );
}

export const PriceCard = ({ heading, width = '33%', para1, para2 }) => {
  return (
    <div
      className={`bg-primary-100 h-104 md:max-tablet:h-100 tablet:max-xl:h-150 xl:h-105 w-[${width}] tablet:w-[33%] rounded-4xl hover:brightness-95 group transition-colors duration-300`}
    >
      <div className='py-4 px-4 max-sm:px-8 max-tablet:px-8 max-tablet:py-4 grid grid-cols-1 gap-4 md:max-xl:gap-3 grid-rows-[1fr_4fr_1fr] md:max-tablet:grid-rows-[1fr_2.4fr_1fr] lg:grid-rows-[1fr_3.8fr_1fr] max-xs:gap-0 lg:gap-0'>
        <div className='flex justify-start items-center'>
          <p className='uppercase text-1.2xl leading-tight font-extrabold'>
            {heading}
          </p>
        </div>
        <div className='packages flex flex-col gap-2'>
          <p className='text-sm lg:leading-6 font-light'>{para1}</p>
          <p className='text-sm lg:leading-6 font-light'>{para2}</p>
        </div>
        <div className='flex flex-col justify-center items-start self-end'>
          <Link
            href='/grow-your-brand'
            className={`${rubik.className} bg-secondary-50 rounded-full w-[100%] h-20 max-sm:h-16 py-4 max-sm:py-2 md:max-tablet:px-2 max-lg:text-sm max-xs:text-xs uppercase flex items-center justify-center text-alternate-50`}
          >
            {'View all features>'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export const PriceCardBlack = ({ heading, width = '33%', para1, para2 }) => {
  return (
    <div
      className={`bg-alternate-50 text-white h-104 md:max-tablet:h-100 tablet:max-xl:h-150 xl:h-105 w-[${width}] tablet:w-[33%] rounded-4xl hover:brightness-95 group transition-colors duration-300`}
    >
      <div className='py-4 px-4 max-sm:px-8 max-tablet:px-8 max-tablet:py-4 grid grid-cols-1 gap-4 md:max-xl:gap-3 grid-rows-[1fr_4fr_1fr] md:max-tablet:grid-rows-[1fr_2.4fr_1fr] lg:grid-rows-[1fr_3.8fr_1fr] max-xs:gap-0 lg:gap-0'>
        <div className='flex justify-start items-center'>
          <p className='uppercase text-1.2xl leading-tight font-extrabold'>
            {heading}
          </p>
        </div>
        <div className='packages flex flex-col gap-2'>
          <p className='text-sm lg:leading-6 font-light'>{para1}</p>
          <p className='text-sm lg:leading-6 font-light'>{para2}</p>
        </div>
        <div className='flex flex-col justify-center items-start'>
          <Link
            href='/grow-your-brand'
            className={`${rubik.className} bg-secondary-50 rounded-full w-[100%] h-20 max-sm:h-16 py-4 max-sm:py-2 md:max-tablet:px-2 max-lg:text-sm max-xs:text-xs uppercase flex items-center justify-center text-alternate-50`}
          >
            {'View all features>'}
          </Link>
        </div>
      </div>
    </div>
  );
};
