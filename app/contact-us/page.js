import message from '@/public/message.svg';
import section1 from '@/public/sec1mob.svg';
import union from '@/public/union01.svg';
import Image from 'next/image';
import Footer from '../components/Footer';
import FullPageNav from '../components/FullPageNav';
import HeaderComp from '../components/HeaderComp';
import NavigationWithLogo from '../components/NavigationWithLogo';
import FormSection from './FormSection';

export const metadata = {
  title: 'Contact Us',
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
        imageSource={message}
        text={'// Reach out for questions, feedback, queries, anything! //'}
        title={'get in touch'}
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
