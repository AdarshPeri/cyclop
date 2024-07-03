import Image from 'next/image';
import { rubik } from '@/app/common/FontConstants';
import star from '@/public/small-star.svg';

const FormHeading = ({heading}) => {
  return (
    <div className='flex items-center justify-end w-[90%] lg:w-[80%] xl:w-[75%]'>
      <div className='h-4 w-4 relative mr-2'>
        <Image src={star} alt='star' fill />
      </div>
      <p
        className={`${rubik.className} text-right max-sm:text-2xl uppercase text-3xl`}
      >
        {heading}
      </p>
    </div>
  );
};

export default FormHeading;
