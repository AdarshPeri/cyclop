import star from '@/public/small-star.svg';
import arrow from '@/public/right-arrow2.svg';
import footer from '@/public/footer.svg';
import section2 from '@/public/sec2mob.svg';

import Image from 'next/image';
import { azeret, rubik } from '../common/FontConstants';

export default function WhyWeDo() {
  return (
    <>
      <div className='flex items-center justify-between w-[90%] lg:w-[80%] xl:w-[75%] mt-20'>
        <div className='flex items-center'>
          <p
            className={`${rubik.className} text-right uppercase text-3xl max-sm:text-1.2xl max-xl:text-2xl max-lg:text-1.2xl mr-2`}
          > 
            Why Cyclop?
          </p>
          <div className='h-4 w-4 relative'>
            <Image src={star} alt='star' fill />
          </div>
        </div>
        <p className={`${rubik.className} underline max-lg:text-sm max-sm:hidden`}>
          {'See all [10] >'}
        </p>
        <p className={`${rubik.className} underline max-lg:text-sm max-sm:text-xs hidden max-sm:block`}>
          {'See all>'}
        </p>
      </div>
      <div className='relative flex overflow-hidden max-md:w-[99%] group'>
        <div className='flex gap-2 mt-10 animate-marquee group-hover:pause'>
          <WhyCard text={'Cyclop is made differently.'} />
          <WhyCard text={'Quick and easy adaptability.'} />
          <WhyCard text={'A stepping stone to success.'} />
          <WhyCard text={'A stepping stone to success.'} />
        </div>
        <div className='absolute top-0 left-2 flex gap-2 mt-10 animate-marquee2 group-hover:pause'>
          <WhyCard text={'Cyclop is made differently.'} />
          <WhyCard text={'Quick and easy adaptability.'} />
          <WhyCard text={'A stepping stone to success.'} />
          <WhyCard text={'A stepping stone to success.'} />
        </div>
      </div>
      <div className='w-[100vw] relative mt-28'>
        <Image src={footer} alt='footer' className='max-sm:hidden w-[100vw]'/>
        <Image src={section2} alt='section-break' className='max-sm:block hidden w-[100vw]'/>
        <p
          className={`${azeret.className} text-sm max-lg:text-xs w-[90%] lg:w-[80%] xl:w-[75%] absolute top-0 max-sm:-top-[40%] lg:max-xl:left-[10%] xl:left-[13%] left-[5%]`}
        >
          {'//Excited to see you work with us!//'}
        </p>
      </div>
    </>
  );
}

const WhyCard = ({ text }) => {
  return (
    <div className='flex flex-col gap-12 py-14 max-lg:pb-10 pl-16 max-lg:pl-12 pr-10 max-lg:pr-6 justify-center rounded-full bg-white w-[25%] max-lg:w-[30%]max-tablet:w-[40%] max-tablet:pl-8 max-sm:w-[65vw] max-sm:py-8 max-sm:px-16 max-sm:gap-4'>
      <p className='text-xl max-lg:text-base'>{text}</p>
      <Image src={arrow} alt='arrow' className='max-sm:h-6 max-sm:w-6'/>
    </div>
  );
};
