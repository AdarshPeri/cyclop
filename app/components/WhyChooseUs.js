import { rubik } from '@/app/common/FontConstants';
import rightArrow from '@/public/ArrowCircleRight.svg';
import star from '@/public/small-star.svg';
import Image from 'next/image';

const WhyChooseUs = ({ heading, description }) => {
  return (
    <div className='w-[90%] lg:w-[80%] xl:w-[75%] flex flex-col items-center gap-4 bg-tertiary-100 rounded-full mb-14 mt-10'>
      <div className='py-48 px-4 md:py-12 md:px-16'>
        <div className='flex items-center justify-center gap-2'>
          <div className='h-4 w-4 relative'>
            <Image src={star} alt='star' fill />
          </div>
          <p className={`${rubik.className} text-right uppercase text-2xl`}>
            {heading}
          </p>
          <div className='h-4 w-4 relative'>
            <Image src={star} alt='star' fill />
          </div>
        </div>
        <p className='text-center mt-4'>
          {description}
        </p>
        <div className='flex justify-center mt-4'>
          <button className='flex px-6 py-2 md:py-6 bg-tertiary-50 rounded-4xl items-center justify-between uppercase w-[86%] md:w-[50%] lg:w-[30%] mb-3 mt-6'>
            <span className={`${rubik.className}`}>WHY CHOOSE US?</span>
            <Image
              src={rightArrow}
              alt='arrow'
              className='animate-bounce max-sm:h-12 max-sm:w-12 inline-block'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
