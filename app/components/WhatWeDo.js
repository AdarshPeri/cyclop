import Image from 'next/image';
import { rubik } from '@/app/common/FontConstants';
import star from '@/public/small-star.svg';
import brain from '@/public/brain.svg';
import code from '@/public/code.svg';
import brush from '@/public/brush.svg';
import rightArrow from '@/public/right-arrow.svg';

export default function WhatWeDo() {
  return (
    <>
      <div className='flex items-center justify-end w-[90%] lg:w-[80%] xl:w-[75%]'>
        <div className='h-4 w-4 relative mr-2'>
          <Image src={star} alt='star' fill />
        </div>
        <p className={`${rubik.className} text-right max-sm:text-1.2xl uppercase text-3xl max-xl:text-2xl max-lg:text-1.2xl`}>
          What we do
        </p>
      </div>
      <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-4 w-[90%] lg:w-[80%] xl:w-[75%] mt-10'>
        <Card
          imageSource={brain}
          description={'Using Cutting-Edge Cognitive Intelligence (AI)'}
        />
        <Card
          imageSource={code}
          description={'With Functional, Scalabe and Crafted Code.'}
        />
        <Card
          imageSource={brush}
          description={'Bespoke Digital Design Solutions.'}
        />
        <CTA />
      </div>
    </>
  );
}

function Card({ imageSource, description }) {
  return (
    <div className='bg-tertiary-100 border rounded-3xl h-84 max-sm:h-32 xl:h-72 flex flex-col max-sm:flex-row max-sm:items-center p-14 max-lg:p-10 max-sm:p-6 xl:p-8 px-12 max-lg:px-8 gap-16 max-sm:gap-12'>
      <Image src={imageSource} alt='brain' className='h-20 w-20 max-lg:h-12 max-lg:w-12' />
      <strong className='pr-6'>{description}</strong>
    </div>
  );
}

function CTA() {
  return (
    <div className='bg-secondary-50 px-10 py-6 flex items-center col-span-3 max-sm:col-span-1 rounded-3xl justify-between'>
      <strong>
        Experience the blend of creativity and functionality with us.
      </strong>
      <Image src={rightArrow} alt='rightArrow' />
    </div>
  );
}
