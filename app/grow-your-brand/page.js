import footer from '@/public/footer.svg';
import grow from '@/public/grow.svg';
import section1 from '@/public/sec1mob.svg';
import section2 from '@/public/sec2mob.svg';
import union from '@/public/union01.svg';
import Image from 'next/image';
import Link from 'next/link';
import { rubik } from '../common/FontConstants';
import Footer from '../components/Footer';
import FormHeading from '../components/FormHeading';
import FullPageNav from '../components/FullPageNav';
import HeaderComp from '../components/HeaderComp';
import NavigationWithLogo from '../components/NavigationWithLogo';
import WhyChooseUs from '../components/WhyChooseUs';
import rightArrow from '@/public/right-arrow.svg';

export const metadata = {
  title: 'Grow Your Brand',
};

export const subFeatures = [
  {
    title: 'office',
    features: [
      'Logo Creation',
      'Brand Identity Development',
      'Basic Website Design',
      'Foundational Analytics',
      'Reporting On Customer Base & Marketing Trends',
      'Personalized Attention',
      'Creative Solutions',
      'Setting The Stage For Growth & Professionalism',
    ],
  },
  {
    title: 'business',
    features: [
      'Logo Creation',
      'Brand Identity Development',
      'Basic Website Design',
      'Foundational Analytics',
      'Reporting On Customer Base & Marketing Trends',
      'Personalized Attention',
      'Creative Solutions',
      'Setting The Stage For Growth & Professionalism',
    ],
  },
  {
    title: 'pro',
    features: [
      'Logo Creation',
      'Brand Identity Development',
      'Basic Website Design',
      'Foundational Analytics',
      'Reporting On Customer Base & Marketing Trends',
      'Personalized Attention',
      'Creative Solutions',
      'Setting The Stage For Growth & Professionalism',
    ],
  },
];

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
        imageSource={grow}
        text={`// Your visionary partner in business! //`}
        title={'grow your brand with us'}
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
    <div className='min-h-content flex flex-col items-center bg-tertiary-200 relative '>
      <FormHeading heading={'Solutions'} />
      <div className='w-[90%] lg:w-[80%] xl:w-[75%] grid grid-cols-1 gap-4 md:max-lg:gap-2 mt-14 md:grid-cols-3'>
        {subFeatures.map((subFeature, index) => (
          <Plan key={index} subFeature={subFeature} />
        ))}
      </div>
      <CTA />
      <WhyChooseUs
        heading={'Still unsure?'}
        description={`Let us show you how Cyclop can change the way you see your business!`}
      />
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
    </div>
  );
};

const Plan = ({ subFeature: { title, features } }) => {
  return (
    <div className='bg-white rounded-3xl p-4 h-160 flex flex-col justify-between'>
      <div>
        <p className='uppercase text-1.2xl font-bold text-center mb-7'>
          {title}
        </p>
        <div className='flex flex-col gap-4 mb-10'>
          {features.map((feature, index) => (
            <div
              className='flex justify-between border-b-alternate-50/10 border-b-2 border-dashed mb-4 pb-4 last:border-none'
              key={index}
            >
              <p className='text-sm'>{feature}</p>
              <ReturnQuestionSvg />
            </div>
          ))}
        </div>
      </div>
      <Link
        href='/'
        className={`${rubik.className} bg-secondary-50 rounded-full w-[100%] h-20 max-sm:h-16 py-4 max-sm:py-2 md:max-tablet:px-1 max-xs:text-xs md:max-tablet:text-xs uppercase flex items-center justify-center text-alternate-50 `}
      >
        {'I Like This Plan >'}
      </Link>
    </div>
  );
};

export const ReturnQuestionSvg = ({ fill = '#202023' }) => {
  return (
    <div className='relative group/q'>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
        className='group/svg max-lg:h-4 max-lg:w-4'
      >
        <path
          id='Vector'
          d='M11.1538 15C11.1538 15.2282 11.0862 15.4513 10.9594 15.641C10.8326 15.8308 10.6524 15.9787 10.4416 16.066C10.2307 16.1533 9.99872 16.1762 9.7749 16.1317C9.55107 16.0872 9.34548 15.9773 9.18411 15.8159C9.02274 15.6545 8.91285 15.4489 8.86833 15.2251C8.82381 15.0013 8.84666 14.7693 8.93399 14.5584C9.02132 14.3476 9.16921 14.1674 9.35896 14.0406C9.54871 13.9138 9.77179 13.8462 10 13.8462C10.306 13.8462 10.5995 13.9677 10.8159 14.1841C11.0323 14.4005 11.1538 14.694 11.1538 15ZM10 4.61538C7.87885 4.61538 6.15385 6.16827 6.15385 8.07692V8.46154C6.15385 8.66555 6.23489 8.86121 6.37915 9.00546C6.52341 9.14972 6.71907 9.23077 6.92308 9.23077C7.12709 9.23077 7.32275 9.14972 7.46701 9.00546C7.61127 8.86121 7.69231 8.66555 7.69231 8.46154V8.07692C7.69231 7.01923 8.72789 6.15384 10 6.15384C11.2721 6.15384 12.3077 7.01923 12.3077 8.07692C12.3077 9.13461 11.2721 10 10 10C9.79599 10 9.60033 10.081 9.45607 10.2253C9.31182 10.3696 9.23077 10.5652 9.23077 10.7692V11.5385C9.23077 11.7425 9.31182 11.9381 9.45607 12.0824C9.60033 12.2266 9.79599 12.3077 10 12.3077C10.204 12.3077 10.3997 12.2266 10.5439 12.0824C10.6882 11.9381 10.7692 11.7425 10.7692 11.5385V11.4692C12.5231 11.1471 13.8462 9.74807 13.8462 8.07692C13.8462 6.16827 12.1212 4.61538 10 4.61538ZM20 10C20 11.9778 19.4135 13.9112 18.3147 15.5557C17.2159 17.2002 15.6541 18.4819 13.8268 19.2388C11.9996 19.9957 9.98891 20.1937 8.0491 19.8078C6.10929 19.422 4.32746 18.4696 2.92894 17.0711C1.53041 15.6725 0.578004 13.8907 0.192152 11.9509C-0.1937 10.0111 0.00433284 8.00042 0.761209 6.17316C1.51809 4.3459 2.79981 2.78412 4.4443 1.6853C6.08879 0.58649 8.02219 0 10 0C12.6513 0.00279983 15.1932 1.05727 17.068 2.93202C18.9427 4.80678 19.9972 7.34869 20 10ZM18.4615 10C18.4615 8.32646 17.9653 6.69051 17.0355 5.29902C16.1057 3.90753 14.7842 2.82299 13.2381 2.18256C11.6919 1.54212 9.99062 1.37456 8.34924 1.70105C6.70786 2.02754 5.20016 2.83342 4.01679 4.01679C2.83343 5.20016 2.02754 6.70786 1.70105 8.34923C1.37456 9.99061 1.54213 11.6919 2.18256 13.2381C2.823 14.7842 3.90753 16.1057 5.29902 17.0355C6.69052 17.9653 8.32647 18.4615 10 18.4615C12.2434 18.459 14.3941 17.5667 15.9804 15.9804C17.5667 14.3941 18.459 12.2434 18.4615 10Z'
          fill={fill}
          className={`group-hover/svg:fill-white`}
        />
      </svg>
      <p
        className={`-right-[90%] clip-pop-right absolute hidden -top-[450%] bg-white px-3 pt-4 pb-8 w-80 group-hover/q:block group-hover:brightness-100 z-50 text-alternate-200`}
      >
        Pellentesque sit amet sapien fringilla. Aliquam in hendrerit urna.Ut et
        massa mi.Pellentesque sit amet sapien fringilla.
      </p>
    </div>
  );
};

function CTA() {
  return (
    <Link
      href='/contact-us'
      className='bg-primary-200 px-10 py-6 flex items-center col-span-3 max-sm:col-span-1 rounded-3xl justify-between w-[90%] lg:w-[80%] xl:w-[75%] mt-4'
    >
      <strong>
        None of these fit the bill? Contact us for a custom package!
      </strong>
      <Image src={rightArrow} alt='rightArrow' />
    </Link>
  );
}
