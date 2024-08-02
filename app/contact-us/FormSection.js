'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { contactUs } from '../_lib/actions';
import ErrorMessage from '../components/ErrorMessage';
import FooterSectionCut from '../components/FooterSectionCut';
import FormHeading from '../components/FormHeading';
import SubmitButton from '../components/SubmitButton';
import toast from 'react-hot-toast';

const initialState = {
  message: '',
  error: false,
};

const FormSection = () => {
  const [formResponse, formAction] = useFormState(contactUs, initialState);
  const { register, reset, formState } = useForm({
    mode: 'onTouched',
  });
  const { errors, isValid } = formState;

  useEffect(() => {
    const { message, error } = formResponse;
    if (error) {
      toast.error(message);
    }
    else if (message) {
      toast.success(message);
      reset();
    }
  }, [formResponse, reset]);

  return (
    <div className='min-h-content flex flex-col items-center bg-tertiary-200 relative'>
      <FormHeading heading={'contact us'} />
      <div className='w-[90%] lg:w-[80%] xl:w-[75%] mt-10 mb-10'>
        <form action={formAction}>
          <h4 className='uppercase border-b-alternate-50/10 border-b-2 border-dashed mb-4 font-extrabold text-1.2xl pb-2'>
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
              <label className='font-bold' htmlFor='email'>
                Email<span className='text-secondary-100'>*</span>
              </label>
              <ErrorMessage error={errors?.email?.message} />

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
            </div>
          </div>
          <h4 className='uppercase font-extrabold text-1.2xl border-b-alternate-50/10 border-b-2 border-dashed mb-4 mt-10 pb-2'>
            Company Details
          </h4>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-3 mt-6 md:mt-10'>
            <div>
              <label className='font-bold' htmlFor='companyName'>
                Company Name
              </label>
              <input
                type='text'
                id='companyName'
                name='companyName'
                {...register('companyName')}
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div>
              <label className='font-bold' htmlFor='industry'>
                Industry
              </label>
              <input
                type='text'
                id='industry'
                name='industry'
                {...register('industry')}
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div>
              <label className='font-bold' htmlFor='employeeCount'>
                No. of Employees
              </label>
              <input
                type='number'
                id='employeeCount'
                name='employeeCount'
                {...register('employeeCount')}
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
              />
            </div>
            <div className=''>
              <label className='font-bold' htmlFor='role'>
                Role
              </label>
              <div className='styleSelect mt-2'>
                <select type='text' id='role' name='role' {...register('role')}>
                  {' '}
                  <option>Developer</option>
                  <option>Designer</option>
                </select>
              </div>
            </div>
            <div className='md:col-span-2 md:col-start-2'>
              <label className='font-bold' htmlFor='software'>
                Any business software you currently use?
              </label>
              <input
                id='software'
                type='text'
                className='inline-block h-20 w-[100%] rounded-4xl mt-2 pl-6'
                {...register('software')}
              />
            </div>
            <div className='md:col-start-1 md:col-span-3'>
              <label className='font-bold' htmlFor='comments'>
                Leave you comments, questions and/or issues here
              </label>
              <textarea
                id='comments'
                className='inline-block h-32 w-[100%] rounded-4xl mt-2 pl-6 py-3'
                {...register('comments')}
              />
            </div>
          </div>

          <div className='flex items-center gap-4 mt-6'>
            <input
              type='checkbox'
              id='consent'
              name='consent'
              {...register('consent', {
                required: 'You must accept the privacy policy',
              })}
            />
            <label htmlFor='consent' className='text-sm'>
              <p className={`${isValid && 'font-bold'}`}>
                By continuing, you agree to the processing of your personal data
                as described in the Privacy Policy.
              </p>
            </label>
          </div>

          <SubmitButton isValid={isValid} />
        </form>
      </div>
      <FooterSectionCut />
    </div>
  );
};

export default FormSection;
