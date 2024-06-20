import section1 from '@/public/sec1mob.svg';
import team from '@/public/team.svg';
import union from '@/public/union01.svg';
import Image from 'next/image';
import Footer from '../components/Footer';
import FullPageNav from '../components/FullPageNav';
import HeaderComp from '../components/HeaderComp';
import NavigationWithLogo from '../components/NavigationWithLogo';
import FormSection from './FormSection';

export const metadata = {
  title: 'Join Us',
};

export default function Page() {
  return (
    <>
      <HeaderSection />
      <FormSection />
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
        imageSource={team}
        text={'//A design and data services company with solutions for you//'}
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
