import Image from 'next/image';
import footer from '@/public/footer.svg';
import section2 from '@/public/sec2mob.svg';

const FooterSectionCut = () => {
  return (
    <div className='w-[100dvw] relative mt-10'>
      <Image src={footer} alt='footer' className='max-sm:hidden' />
      <Image
        src={section2}
        alt='section-break'
        className='max-sm:block hidden'
      />
      <p
        className={`text-sm w-[90%] lg:w-[80%] xl:w-[75%] absolute top-0 max-sm:-top-[40%] lg:max-xl:left-[10%] xl:left-[13%] left-[5%]`}
      >
        {'//Excited to see you work with us!//'}
      </p>
    </div>
  );
};

export default FooterSectionCut;
