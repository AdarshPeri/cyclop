'use client';

import rightArrow from '@/public/ArrowCircleRight.svg';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { joinUs } from '../_lib/actions';
import { rubik } from '../common/FontConstants';
import ErrorMessage from '../components/ErrorMessage';
import FooterSectionCut from '../components/FooterSectionCut';
import FormHeading from '../components/FormHeading';

const FormSection = () => {
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    mode: 'onTouched',
  });
  const { errors, isValid } = formState;

  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <div className='min-h-content flex flex-col items-center bg-tertiary-200 relative'>
      <FormHeading heading={'contact us'} />
      <div className='w-[90%] lg:w-[80%] xl:w-[75%] mt-10 mb-10'>
        <form onSubmit={handleSubmit(onError)} action={joinUs}>
          <h4 className='uppercase font-extrabold text-1.2xl border-b-alternate-50/10 border-b-2 border-dashed mb-4 pb-2'>
            Personal details
          </h4>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-3 mt-6 md:mt-10'>
            <div className='relative'>
              <label className='font-bold' htmlFor='firstName'>
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
              <label className='font-bold' htmlFor='middleName'>Middle Name [If any]</label>
              <input
                type='text'
                id='middleName'
                name='middleName'
                {...register('middleName')}
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div className='relative'>
              <label className='font-bold' htmlFor='lastName'>
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
              <label className='font-bold' htmlFor='phone'>
                Phone<span className='text-secondary-100'>*</span>
              </label>
              <input
                type='text'
                required
                id='phone'
                name='phone'
                {...register('phone', {
                  required: 'Mandatory Field',
                })}
                className={`inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6 ${
                  errors?.phone?.message &&
                  'border-secondary-100 border-dashed border-[3px]'
                }`}
              />
              <ErrorMessage error={errors?.phone?.message} />
            </div>
            <div className='relative'>
              <label className='font-bold' htmlFor='email'>
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
          <h4 className='uppercase font-extrabold text-1.2xl border-b-alternate-50/10 border-b-2 border-dashed mb-4 mt-10 pb-2'>
            Address
          </h4>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-3 mt-6 md:mt-10'>
            <div>
              <label className='font-bold' htmlFor='line1'>Line 1</label>
              <input
                type='text'
                id='line1'
                name='line1'
                {...register('line1')}
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div>
              <label className='font-bold' htmlFor='line2'>Line 2</label>
              <input
                type='text'
                id='line2'
                name='line2'
                {...register('line2')}
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div>
              <label className='font-bold' htmlFor='city'>City</label>
              <input
                type='text'
                id='city'
                name='city'
                {...register('city')}
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div className=''>
              <label className='font-bold' htmlFor='country'>Country</label>
              <div className='styleSelect mt-2'>
                <select
                  type='text'
                  id='country'
                  name='country'
                  {...register('country')}
                >
                  {' '}
                  <option>Australia</option>
                  <option>India</option>
                </select>
              </div>
            </div>
            <div>
              <label className='font-bold' htmlFor='code'>Code</label>
              <input
                type='text'
                id='code'
                name='code'
                {...register('code')}
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
          </div>
          <h4 className='uppercase font-bold border-b-alternate-50/10 border-b-2 border-dashed mb-4 mt-10 pb-2'>
            Documents
          </h4>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-2 mt-6 md:mt-10'>
            <div className='relative'>
              <label className='font-bold' htmlFor='coverLetter'>
                Cover Letter
                <span className='text-secondary-100'>*</span>
              </label>

              <input
                type='file'
                id='coverLetter'
                className='inputFile'
                accept='application/pdf'
                {...register('coverLetter', {
                  required: 'Cover letter is mandatory',
                  validate: (value) => {
                    if (value[0].size > 2000000) {
                      return 'Max file size is 2MB';
                    }
                    return true;
                  },
                })}
              />
              <ErrorMessage error={errors?.coverLetter?.message} />

              <label
                htmlFor='coverLetter'
                className='h-20 w-[100%] flex items-center justify-between  border-b-alternate-50/10 border-2 border-dashed rounded-4xl mt-2 px-6 cursor-pointer'
              >
                <span className='text-b-alternate-50/10'>
                  {getValues('coverLetter')?.[0]?.name
                    ? getValues('coverLetter')[0]?.name
                    : 'Choose a File'}
                </span>
                <svg
                  width='23'
                  height='26'
                  viewBox='0 0 23 26'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    id='Vector'
                    d='M22.5645 13.7915L12.5281 23.8458C11.1515 25.2255 9.28458 26.0003 7.33806 26C5.39154 25.9997 3.52488 25.2241 2.14873 23.844C0.772577 22.4639 -0.000343935 20.5923 1.14811e-07 18.6408C0.000344164 16.6894 0.773925 14.818 2.15056 13.4384L14.156 1.43575C15.0738 0.516111 16.3185 -0.000344745 17.6161 1.72655e-07C18.2586 0.000170959 18.8948 0.127215 19.4884 0.373877C20.0819 0.620539 20.6212 0.98199 21.0754 1.43759C21.5296 1.89319 21.8899 2.43402 22.1356 3.0292C22.3814 3.62438 22.5077 4.26226 22.5076 4.90641C22.5074 5.55055 22.3807 6.18836 22.1346 6.78341C21.8886 7.37846 21.528 7.9191 21.0736 8.37446L21.0528 8.39408L9.33598 19.7015C9.19705 19.8355 9.03316 19.9407 8.85367 20.0112C8.67418 20.0816 8.4826 20.116 8.28987 20.1122C8.09714 20.1085 7.90703 20.0667 7.73041 19.9893C7.55378 19.9119 7.3941 19.8003 7.26047 19.661C7.12684 19.5218 7.02188 19.3575 6.95159 19.1775C6.8813 18.9976 6.84705 18.8055 6.85079 18.6123C6.85454 18.4191 6.89621 18.2285 6.97343 18.0514C7.05065 17.8743 7.1619 17.7143 7.30083 17.5803L19.0066 6.28512C19.3725 5.91603 19.5772 5.41634 19.5756 4.89597C19.574 4.37561 19.3662 3.87719 18.9981 3.51038C18.8158 3.32875 18.5996 3.18489 18.3618 3.08703C18.1241 2.98916 17.8694 2.9392 17.6124 2.94C17.0934 2.94161 16.5962 3.14987 16.2303 3.51896L4.22486 15.5179C3.39917 16.346 2.93543 17.469 2.93566 18.6399C2.93577 19.2197 3.04979 19.7937 3.2712 20.3293C3.49261 20.8649 3.81708 21.3515 4.22608 21.7614C4.63508 22.1713 5.12061 22.4964 5.65493 22.7181C6.18926 22.9399 6.76192 23.054 7.34022 23.0539C8.50815 23.0536 9.62816 22.5883 10.4539 21.7602L20.4902 11.7059C20.6267 11.569 20.7888 11.4604 20.9672 11.3864C21.1455 11.3123 21.3367 11.2742 21.5298 11.2742C21.7229 11.2742 21.914 11.3123 22.0924 11.3864C22.2708 11.4604 22.4329 11.569 22.5694 11.7059C22.7059 11.8427 22.8142 12.0052 22.8881 12.184C22.962 12.3629 23 12.5545 23 12.7481C23 12.9416 22.962 13.1333 22.8881 13.3121C22.8142 13.491 22.7059 13.6534 22.5694 13.7903L22.5645 13.7915Z'
                    fill='black'
                  />
                </svg>
              </label>
              <p className='mt-3'>Only PDF files.</p>
            </div>
            <div className='relative'>
              <label className='font-bold' htmlFor='resume'>
                Resume<span className='text-secondary-100'>*</span>
              </label>

              <input
                type='file'
                id='resume'
                className='inputFile'
                accept='application/pdf'
                {...register('resume', {
                  required: 'Resume is mandatory',
                  validate: (value) => {
                    if (value[0].size > 2000000) {
                      return 'Max file size is 2MB';
                    }
                    return true;
                  },
                })}
              />
              <ErrorMessage error={errors?.resume?.message} />

              <label
                htmlFor='resume'
                className='h-20 w-[100%] flex items-center justify-between  border-b-alternate-50/10 border-2 border-dashed rounded-4xl mt-2 px-6 cursor-pointer'
              >
                <span className='text-b-alternate-50/10'>
                  {getValues('resume')?.[0]?.name
                    ? getValues('resume')[0]?.name
                    : 'Choose a File'}
                </span>
                <svg
                  width='23'
                  height='26'
                  viewBox='0 0 23 26'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    id='Vector'
                    d='M22.5645 13.7915L12.5281 23.8458C11.1515 25.2255 9.28458 26.0003 7.33806 26C5.39154 25.9997 3.52488 25.2241 2.14873 23.844C0.772577 22.4639 -0.000343935 20.5923 1.14811e-07 18.6408C0.000344164 16.6894 0.773925 14.818 2.15056 13.4384L14.156 1.43575C15.0738 0.516111 16.3185 -0.000344745 17.6161 1.72655e-07C18.2586 0.000170959 18.8948 0.127215 19.4884 0.373877C20.0819 0.620539 20.6212 0.98199 21.0754 1.43759C21.5296 1.89319 21.8899 2.43402 22.1356 3.0292C22.3814 3.62438 22.5077 4.26226 22.5076 4.90641C22.5074 5.55055 22.3807 6.18836 22.1346 6.78341C21.8886 7.37846 21.528 7.9191 21.0736 8.37446L21.0528 8.39408L9.33598 19.7015C9.19705 19.8355 9.03316 19.9407 8.85367 20.0112C8.67418 20.0816 8.4826 20.116 8.28987 20.1122C8.09714 20.1085 7.90703 20.0667 7.73041 19.9893C7.55378 19.9119 7.3941 19.8003 7.26047 19.661C7.12684 19.5218 7.02188 19.3575 6.95159 19.1775C6.8813 18.9976 6.84705 18.8055 6.85079 18.6123C6.85454 18.4191 6.89621 18.2285 6.97343 18.0514C7.05065 17.8743 7.1619 17.7143 7.30083 17.5803L19.0066 6.28512C19.3725 5.91603 19.5772 5.41634 19.5756 4.89597C19.574 4.37561 19.3662 3.87719 18.9981 3.51038C18.8158 3.32875 18.5996 3.18489 18.3618 3.08703C18.1241 2.98916 17.8694 2.9392 17.6124 2.94C17.0934 2.94161 16.5962 3.14987 16.2303 3.51896L4.22486 15.5179C3.39917 16.346 2.93543 17.469 2.93566 18.6399C2.93577 19.2197 3.04979 19.7937 3.2712 20.3293C3.49261 20.8649 3.81708 21.3515 4.22608 21.7614C4.63508 22.1713 5.12061 22.4964 5.65493 22.7181C6.18926 22.9399 6.76192 23.054 7.34022 23.0539C8.50815 23.0536 9.62816 22.5883 10.4539 21.7602L20.4902 11.7059C20.6267 11.569 20.7888 11.4604 20.9672 11.3864C21.1455 11.3123 21.3367 11.2742 21.5298 11.2742C21.7229 11.2742 21.914 11.3123 22.0924 11.3864C22.2708 11.4604 22.4329 11.569 22.5694 11.7059C22.7059 11.8427 22.8142 12.0052 22.8881 12.184C22.962 12.3629 23 12.5545 23 12.7481C23 12.9416 22.962 13.1333 22.8881 13.3121C22.8142 13.491 22.7059 13.6534 22.5694 13.7903L22.5645 13.7915Z'
                    fill='black'
                  />
                </svg>
              </label>
              <p className='mt-3'>Only PDF files.</p>
            </div>
          </div>
          <div className='flex items-center gap-4 mt-6'>
            <input
              type='checkbox'
              id='consent'
              name='consent'
              {...register('consent', {
                required: 'Must accept privacy policy',
              })}
              className='cursor-pointer'
            />
            <label className='text-sm' htmlFor='consent'>
              <p className={`${isValid && 'font-bold'}`}>
                By continuing, you agree to the processing of your personal data
                as described in the Privacy Policy.
              </p>
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
      <FooterSectionCut />
    </div>
  );
};

export default FormSection;
