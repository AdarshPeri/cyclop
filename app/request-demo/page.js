import HeaderComp from '../components/HeaderComp';
import demo from '@/public/demo.svg';
import NavigationWithLogo from '../components/NavigationWithLogo';
import FullPageNav from '../components/FullPageNav';
import Footer from '../components/Footer';
import FormHeading from '../components/FormHeading';
import rightArrow from '@/public/ArrowCircleRight.svg';
import Image from 'next/image';
import { rubik } from '../common/FontConstants';
import footer from '@/public/footer.svg';
import section2 from '@/public/sec2mob.svg';
import section1 from '@/public/sec1mob.svg';
import union from '@/public/union01.svg';

export const metadata = {
  title: 'Request Demo',
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
        imageSource={demo}
        text={`//We're glad you've shown interest! //`}
      />
      <div className='w-[100dvw] bg-tertiary-200 relative mt-8'>
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

const FormSection = () => {
  return (
    <div className='min-h-content flex flex-col items-center bg-tertiary-200 relative'>
      <FormHeading heading={'Request demo'} />
      <div className='w-[90%] lg:w-[80%] xl:w-[75%] mt-10 mb-10'>
        <form className=''>
          <h4 className='uppercase font-bold border-b-alternate-50/10 border-b-2 border-dashed mb-4'>
            Personal details
          </h4>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
            <div>
              <label htmlFor='firstName'>
                First Name<span className='text-secondary-100'>*</span>
              </label>
              <input
                type='text'
                required
                id='firstName'
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div>
              <label htmlFor='lastName'>
                Last Name<span className='text-secondary-100'>*</span>
              </label>
              <input
                type='text'
                required
                id='lastName'
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div>
              <label htmlFor='email'>
                Email<span className='text-secondary-100'>*</span>
              </label>
              <input
                type='email'
                required
                id='email'
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
          </div>
          <h4 className='uppercase font-bold border-b-alternate-50/10 border-b-2 border-dashed mb-4 mt-10'>
            Company Details
          </h4>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
            <div>
              <label htmlFor='companyName'>Company Name</label>
              <input
                type='text'
                id='companyName'
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div>
              <label htmlFor='Industry'>Industry</label>
              <input
                type='text'
                id='Industry'
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div>
              <label htmlFor='employeeCount'>No. of employees</label>
              <input
                type='number'
                id='employeeCount'
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div className=''>
              <label htmlFor='role'>Role</label>
              <div className='styleSelect'>
                <select type='text' id='role'>
                  {' '}
                  <option>Developer</option>
                  <option>Designer</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor='software'>
                Any business software you currently use?
              </label>
              <textarea
                id='software'
                className='inline-block h-32 w-[100%] rounded-4xl mt-2 pl-6 py-3'
              />
            </div>
          </div>
          <div className='flex items-center gap-4 mt-3'>
            <input type='checkbox' id='consent' />
            <label htmlFor='consent' className='text-sm'>
              <strong>
                By continuing, you agree to the processing of your personal data
                as described in the Privacy Policy.
              </strong>
            </label>
          </div>

          <button className='flex px-6 py-2 md:py-6 bg-tertiary-100 rounded-4xl items-center justify-between uppercase w-[100%] md:w-[30%] lg:w-[30%] mb-3 mt-6'>
            <span className={`${rubik.className}`}>APPLY</span>
            <Image
              src={rightArrow}
              alt='arrow'
              className='animate-bounce max-sm:h-12 max-sm:w-12 inline-block'
            />
          </button>
        </form>
      </div>
      <div className='w-[100dvw] relative mt-10'>
        <Image src={footer} alt='footer' className='max-sm:hidden' />
        <Image
          src={section2}
          alt='section-break'
          className='max-sm:block hidden'
        />
      </div>
    </div>
  );
};
