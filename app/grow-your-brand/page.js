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
import FooterSectionCut from '../components/FooterSectionCut';

export const metadata = {
  title: 'Grow Your Brand',
};

export const subFeatures = [
  {
    title: 'office',
    features: [
      {
        featureName: 'Logo Creation',
        featureDesc: `Let's cook up a logo that's as unique as your brand's secret sauce, something that sticks in minds and hearts!`,
      },
      {
        featureName: 'Brand Identity Development',
        featureDesc: `Think of us as your brand's personal stylists, crafting the perfect look with colors, fonts, and guidelines that scream "you" across every platform.`,
      },
      {
        featureName: 'Basic Website Design',
        featureDesc: `We'll whip up a website that's not just eye candy but also super easy to navigate, like a digital treasure map leading straight to your brand.`,
      },
      {
        featureName: 'Foundational Analytics',
        featureDesc: `We'll crunch the numbers so you can see who's loving your site and why—they're like digital detectives on the case!`,
      },
      {
        featureName: 'Reporting On Customer Base & Marketing Trends',
        featureDesc: `Our reports are like your brand's gossip column, dishing out juicy insights on who's buzzing about you and where the trends are heading.`,
      },
      {
        featureName: 'Personalized Attention & Creative Solutions',
        featureDesc: `We're not just your team, we're your partners in digital crime, dedicated to cracking the code on what makes your brand shine brighter than the rest!`,
      },
    ],
  },
  {
    title: 'business',
    features: [
      {
        featureName: 'Website Development',
        featureDesc: `We're the architects behind websites that aren't just eye candy—they're functional and super flexible, like acrobats doing back-flips on any device. Our mission? Making your online presence not just look good, but work flawlessly too!`,
      },
      {
        featureName: 'Marketing Collateral Creation',
        featureDesc: `We love crafting brochures, flyers, and posters that really tell your brand's story. Our goal is to make your message pop and resonate with your audience, boosting your marketing efforts in a way that feels just right.`,
      },
      {
        featureName: 'UX/UI (User Experience/User Interface) design',
        featureDesc: `We specialize in creating interfaces that are not only intuitive but also irresistibly user-friendly. Our designs are like magic spells that enhance user experience, keeping your audience engaged and delighted with every click and swipe.`,
      },
      {
        featureName: `Advanced Data Services: Business intelligence reporting, Predictive analytics, Customer segmentation`,
        featureDesc: `We predict future trends with predictive analytics, giving you a competitive edge. Our customer segmentation sorts clients into ideal groups based on preferences, delivering personalized experiences. Through business intelligence reporting, we decode data to uncover insights, revealing your business's strengths and areas for growth.`,
      },
      {
        featureName:
          'Close collaboration with clients & Driving operational efficiency',
        featureDesc: `We're your partners in crime for business brilliance! Together, we dive deep into your goals and challenges, crafting solutions that turbo-charge efficiency, slash costs, and amp up productivity. Let's make your business a lean, mean, efficiency machine!`,
      },
    ],
  },
  {
    title: 'pro',
    features: [
      {
        featureName: 'Custom App Development',
        featureDesc: `Expect premium design services in creating apps that feel like they were made just for you — slick, intuitive, and ready to impress your users.`,
      },
      {
        featureName: 'Interactive Media Design',
        featureDesc: `Get ready for eye-popping animations and engaging videos that make your brand sparkle and your audience say "wow!"`,
      },
      {
        featureName: 'Strategic Branding Initiatives',
        featureDesc: `We'll cook up branding strategies so good, your competitors will wonder how you make it look so easy.`,
      },
      {
        featureName:
          'Holistic Data Services: Machine learning models, Big data analytics, Tailored insights',
        featureDesc: `Our machine learning models act like your business's secret sauce—predicting trends, automating decisions, and boosting operational efficiency. Dive into the vast sea of big data with us to uncover hidden insights that transform challenges into victories. Think of us as your business detectives, finding tailored solutions to complex problems and guiding you confidently toward success.`,
      },
      {
        featureName:
          'delivering high-impact solutions & Optimizing operational performance',
        featureDesc: `Think of us as your business's personal efficiency gurus — streamlining processes, cutting costs, and making everything run smoother than a well-oiled machine.We bring serious know-how and creativity to the table & craft goal oriented solutions.`,
      },
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
      <div className='w-[90%] lg:w-[80%] xl:w-[75%] grid grid-cols-1 gap-4 md:max-lg:gap-2 mt-14 tablet:grid-cols-3'>
        {subFeatures.map((subFeature, index) => (
          <Plan key={index} subFeature={subFeature} />
        ))}
      </div>
      <CTA />
      <WhyChooseUs
        heading={'Still unsure?'}
        description={`Let us show you how Cyclop can change the way you see your business!`}
      />
      <FooterSectionCut />
    </div>
  );
};

const Plan = ({ subFeature: { title, features } }) => {
  return (
    <div className='bg-white rounded-3xl p-8 h-160 flex flex-col justify-between'>
      <div>
        <p className='uppercase text-1.2xl font-extrabold text-left mb-7'>
          {title}
        </p>
        <div className='flex flex-col gap-4 mb-10'>
          {features.map((feature, index) => (
            <div
              className='flex justify-between items-center border-b-alternate-50/10 border-b-2 border-dashed pb-4 last:border-none'
              key={index}
            >
              <p className='text-sm pr-2 capitalize'>{feature.featureName}</p>
              <ReturnQuestionSvg desc={feature.featureDesc} />
            </div>
          ))}
        </div>
      </div>
      <Link
        href='/'
        className={`${rubik.className} bg-secondary-50 rounded-full w-[100%] h-20 max-sm:h-16 py-4 max-sm:py-2 md:max-tablet:px-1 max-xs:text-xs md:max-lg:text-sm uppercase flex items-center justify-center text-alternate-50 `}
      >
        {'I Like This Plan'}
      </Link>
    </div>
  );
};

export const ReturnQuestionSvg = ({ desc }) => {
  return (
    <div className='relative group cursor-pointer'>
      <div className=''>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='group-hover:hidden'
        >
          <path
            id='Vector'
            d='M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z'
            fill='#202023'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          className='hidden group-hover:block'
        >
          <path
            d='M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519941 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9966 8.81843 22.7313 5.76814 20.4816 3.51843C18.2319 1.26872 15.1816 0.00335979 12 0ZM12 19.3846C11.7262 19.3846 11.4585 19.3034 11.2308 19.1513C11.0031 18.9991 10.8256 18.7829 10.7208 18.5299C10.616 18.2769 10.5886 17.9985 10.642 17.7299C10.6954 17.4613 10.8273 17.2146 11.0209 17.0209C11.2146 16.8273 11.4613 16.6954 11.7299 16.642C11.9985 16.5886 12.2769 16.616 12.5299 16.7208C12.7829 16.8256 12.9991 17.003 13.1513 17.2307C13.3034 17.4584 13.3846 17.7261 13.3846 18C13.3846 18.3672 13.2387 18.7194 12.9791 18.9791C12.7194 19.2387 12.3672 19.3846 12 19.3846ZM12.9231 13.7631V13.8462C12.9231 14.091 12.8258 14.3258 12.6527 14.4989C12.4796 14.672 12.2448 14.7692 12 14.7692C11.7552 14.7692 11.5204 14.672 11.3473 14.4989C11.1742 14.3258 11.0769 14.091 11.0769 13.8462V12.9231C11.0769 12.6783 11.1742 12.4435 11.3473 12.2704C11.5204 12.0972 11.7552 12 12 12C13.5265 12 14.7692 10.9615 14.7692 9.69231C14.7692 8.42308 13.5265 7.38461 12 7.38461C10.4735 7.38461 9.23077 8.42308 9.23077 9.69231V10.1538C9.23077 10.3987 9.13352 10.6334 8.96041 10.8066C8.7873 10.9797 8.55251 11.0769 8.3077 11.0769C8.06288 11.0769 7.82809 10.9797 7.65498 10.8066C7.48187 10.6334 7.38462 10.3987 7.38462 10.1538V9.69231C7.38462 7.40192 9.45462 5.53846 12 5.53846C14.5454 5.53846 16.6154 7.40192 16.6154 9.69231C16.6154 11.6977 15.0277 13.3765 12.9231 13.7631Z'
            fill='black'
          />
        </svg>
      </div>
      <p
        className={`-right-[85%] clip-pop-right absolute hidden -top-[185px] bg-black px-3 pt-4 pb-8 w-80 group-hover:block group-hover:brightness-100 z-50 text-white h-48 overflow-y-scroll overscroll-contain`}
      >
        {desc}
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
      <p>
        <strong>None of these fit the bill?</strong> Contact us for a custom package!
      </p>
      <Image src={rightArrow} alt='rightArrow' />
    </Link>
  );
}
