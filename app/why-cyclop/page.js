import section1 from '@/public/sec1mob.svg';
import union from '@/public/union01.svg';
import why from '@/public/why.svg';
import Image from 'next/image';
import Footer from '../components/Footer';
import FooterSectionCut from '../components/FooterSectionCut';
import FormHeading from '../components/FormHeading';
import FullPageNav from '../components/FullPageNav';
import HeaderComp from '../components/HeaderComp';
import NavigationWithLogo from '../components/NavigationWithLogo';
import Subscription from '../components/Subscription';
import WhyChooseUs from '../components/WhyChooseUs';
import { whyTexts } from '../components/WhyWeDo';

export const metadata = {
  title: 'Why Cyclop',
};

export default function Page() {
  return (
    <>
      <HeaderSection />
      <MainSection />
      <Footer />
    </>
  );
}

const HeaderSection = () => {
  return (
    <div className='min-h-content flex flex-col items-center relative'>
      <NavigationWithLogo />
      <FullPageNav />
      <HeaderComp
        imageSource={why}
        text={`// From basic and affordable to advanced and high-demand! //`}
        title={'for all businesses'}
      />
      <div className='w-[100dvw] bg-tertiary-200 relative mt-8 lg:mt-0'>
        <Image src={union} alt='section-break' className='max-sm:hidden' />
        <Image
          src={section1}
          alt='section-break'
          className='max-sm:block hidden'
        />
      </div>
    </div>
  );
};

const MainSection = () => {
  return (
    <div className='min-h-content flex flex-col items-center bg-tertiary-200 relative'>
      <FormHeading heading={'why cyclop?'} />
      <div className='w-[90%] lg:w-[80%] xl:w-[75%] grid grid-cols-1 gap-14 mt-14 md:grid-cols-2'>
        {whyTexts.map((why, index) => (
          <WhyDescriptions key={index} why={why} index={index + 1} />
        ))}
      </div>
      <Subscription textAlign='left' />
      <WhyChooseUs
        heading={'Did you know'}
        description={`The name "Cyclops" itself comes from the Greek words "kyklos" (meaning circle or wheel) and "ops" (meaning eye). Borrowing from this concept, we hope to provide you holistic services as whole as the name! `}
        buttonText='SEE OUR SERVICES'
      />
      <FooterSectionCut />
    </div>
  );
};

const WhyDescriptions = ({ why: { title, description }, index }) => {
  return (
    <div className='bg-white relative rounded-3xl p-4'>
      <p className='absolute -top-[6%] left-4 h-16 w-16 bg-tertiary-100 rounded-full text-1.2xl font-bold flex justify-center items-center pl-1'>
        {`${index}.`}
      </p>
      <div className='flex flex-col gap-4 my-10 px-6'>
        <p className='text-2xl font-bold'>{title}</p>
        <p className=''>{description}</p>
      </div>
    </div>
  );
};
