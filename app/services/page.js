import { rubik } from '@/app/common/FontConstants';
import rightArrow from '@/public/ArrowCircleRight.svg';
import footer from '@/public/footer.svg';
import section1 from '@/public/sec1mob.svg';
import section2 from '@/public/sec2mob.svg';
import services from '@/public/services.svg';
import star from '@/public/small-star.svg';
import union from '@/public/union01.svg';
import Image from 'next/image';
import Footer from '../components/Footer';
import FormHeading from '../components/FormHeading';
import FullPageNav from '../components/FullPageNav';
import HeaderComp from '../components/HeaderComp';
import NavigationWithLogo from '../components/NavigationWithLogo';
import Service from '../components/Service';
import Subscription from '../components/Subscription';
import { allServices } from '../components/WhatWeOffer';
import WhyChooseUs from '../components/WhyChooseUs';

export const metadata = {
  title: 'Services',
};

export default function Page() {
  return (
    <>
      <HeaderSection />
      <ServicesList />
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
        imageSource={services}
        text={`// Indulge in excellence with our services at the heart of our ethos! //`}
        title={'what we offer'}
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

const ServicesList = () => {
  const services = allServices.flat();
  return (
    <div className='min-h-screen flex flex-col items-center bg-tertiary-200 relative'>
      <FormHeading heading={'services'} />
      <div className='w-[90%] lg:w-[80%] xl:w-[75%] mt-10 mb-10 flex flex-col gap-4'>
        {services.map((service, index) => (
          <Service key={index} text={service.text} details={service.details} />
        ))}
      </div>
      <Subscription />
      <WhyChooseUs
        heading={'Did you know'}
        description={`Cyclops were formidable one-eyed giants known for their strength and
          craftsmanship. Inspired by greek mythology, we intend bring you
          services of the same mettle!`}
      />
      <div className='w-[100dvw] relative mt-10'>
        <Image src={footer} alt='footer' className='max-sm:hidden' />
        <Image
          src={section2}
          alt='section-break'
          className='max-sm:block hidden'
        />
        <p
          className={`text-sm max-lg:text-xs w-[90%] lg:w-[80%] xl:w-[75%] absolute top-0 max-sm:-top-[40%] lg:max-xl:left-[10%] xl:left-[13%] left-[5%]`}
        >
          {'//Excited to see you work with us!//'}
        </p>
      </div>
    </div>
  );
};
