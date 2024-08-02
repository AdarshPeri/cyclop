import Image from 'next/image';
import { rubik } from '../common/FontConstants';
import rightArrow from '@/public/ArrowCircleRight.svg';
import { useFormStatus } from 'react-dom';

function SubmitButton({ isValid }) {
  const { pending } = useFormStatus();
  return (
    <button
      className={`flex px-6 py-2 md:py-6 bg-tertiary-100 rounded-4xl items-center justify-between uppercase  mb-3 mt-8 disabled:opacity-60 
      ${pending ? 'w-[100%] md:w-[43%] lg:w-[33%]' : 'w-[100%] md:w-[30%] lg:w-[20%]'}
      `}
      disabled={!isValid || pending}
    >
      {pending ? (
        <span className={`${rubik.className}`}>SUBMITTING...</span>
      ) : (
        <span className={`${rubik.className}`}>SUBMIT</span>
      )}

      <Image
        src={rightArrow}
        alt='arrow'
        className='animate-bounce max-sm:h-12 max-sm:w-12 inline-block'
      />
    </button>
  );
}

export default SubmitButton;
