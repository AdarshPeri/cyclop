'use client';

import rightArrow from '@/public/ArrowCircleRight.svg';
import footer from '@/public/footer.svg';
import section2 from '@/public/sec2mob.svg';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { contactUs } from '../_lib/actions';
import { rubik } from '../common/FontConstants';
import ErrorMessage from '../components/ErrorMessage';
import FormHeading from '../components/FormHeading';

const FormSection = () => {
  const { register, handleSubmit, reset, formState } = useForm({
    mode: 'onTouched',
  });
  const { errors, isValid } = formState;

  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <div className='min-h-content flex flex-col items-center bg-tertiary-200 relative'>
      <FormHeading heading={'request demo'} />
      <div className='w-[90%] lg:w-[80%] xl:w-[75%] mt-10 mb-10'>
        <form onSubmit={handleSubmit(onError)} action={contactUs}>
          <h4 className='uppercase font-bold border-b-alternate-50/10 border-b-2 border-dashed mb-4'>
            Personal details
          </h4>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
            <div className='relative'>
              <label htmlFor='firstName'>
                First Name<span className='text-secondary-100'>*</span>
              </label>
              <input
                type='text'
                required
                id='firstName'
                name='firstName'
                {...register('firstName', {
                  required: 'Mandatory Field',
                })}
                className={`inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6 ${
                  errors?.firstName?.message &&
                  'border-secondary-100 border-dashed border-[3px]'
                }`}
              />
              <ErrorMessage error={errors?.firstName?.message} />
            </div>
            <div className='relative'>
              <label htmlFor='lastName'>
                Last Name<span className='text-secondary-100'>*</span>
              </label>
              <input
                type='text'
                required
                id='lastName'
                name='lastName'
                {...register('lastName', {
                  required: 'Mandatory Field',
                })}
                className={`inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6 ${
                  errors?.lastName?.message &&
                  'border-secondary-100 border-dashed border-[3px]'
                }`}
              />
              <ErrorMessage error={errors?.lastName?.message} />
            </div>
            <div className='relative'>
              <label htmlFor='email'>
                Email<span className='text-secondary-100'>*</span>
              </label>

              <input
                type='email'
                required
                id='email'
                name='email'
                {...register('email', {
                  required: 'Mandatory Field',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Please provide a valid email address',
                  },
                })}
                className={`inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6 ${
                  errors?.email?.message &&
                  'border-secondary-100 border-dashed border-[3px]'
                }`}
              />
              <ErrorMessage error={errors?.email?.message} />
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
                name='companyName'
                {...register('companyName')}
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div>
              <label htmlFor='industry'>Industry</label>
              <input
                type='text'
                id='industry'
                name='industry'
                {...register('industry')}
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div>
              <label htmlFor='employeeCount'>No. of Employees</label>
              <input
                type='number'
                id='employeeCount'
                name='employeeCount'
                {...register('employeeCount')}
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div className=''>
              <label htmlFor='role'>Role</label>
              <div className='styleSelect'>
                <select type='text' id='role' name='role' {...register('role')}>
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
                {...register('software')}
              />
            </div>
          </div>

          <div className='flex items-center gap-4 mt-3'>
            <input
              type='checkbox'
              id='consent'
              name='consent'
              {...register('consent', {
                required: 'You must accept the privacy policy',
              })}
            />
            <label htmlFor='consent' className='text-sm'>
              <strong>
                By continuing, you agree to the processing of your personal data
                as described in the Privacy Policy.
              </strong>
            </label>
          </div>

          <button
            className='flex px-6 py-2 md:py-6 bg-tertiary-100 rounded-4xl items-center justify-between uppercase w-[100%] md:w-[30%] lg:w-[20%] mb-3 mt-6 disabled:opacity-60'
            disabled={!isValid}
          >
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

export default FormSection;
