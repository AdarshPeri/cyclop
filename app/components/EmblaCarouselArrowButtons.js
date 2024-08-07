'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useService } from './ServiceContext';

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const { setOpenServiceIndex } = useService();

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    setOpenServiceIndex(null);
  }, [emblaApi, setOpenServiceIndex]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    setOpenServiceIndex(null);
  }, [emblaApi, setOpenServiceIndex]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className='embla__button embla__button--prev'
      type='button'
      {...restProps}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='48'
        height='48'
        viewBox='0 0 48 48'
        fill='none'
      >
        <circle
          cx='23.4001'
          cy='24'
          r='16.2'
          transform='rotate(90 23.4001 24)'
          fill='#202023'
        />
        <path
          d='M48 24C48 19.2533 46.5924 14.6131 43.9553 10.6663C41.3181 6.71954 37.5698 3.6434 33.1844 1.8269C28.799 0.010398 23.9734 -0.464882 19.3178 0.461163C14.6623 1.38721 10.3859 3.67299 7.02945 7.02944C3.67298 10.3859 1.38721 14.6623 0.461162 19.3178C-0.464883 23.9734 0.0103976 28.799 1.8269 33.1844C3.6434 37.5698 6.71954 41.3181 10.6663 43.9553C14.6131 46.5924 19.2533 48 24 48C30.3631 47.9933 36.4637 45.4626 40.9631 40.9631C45.4626 36.4637 47.9933 30.3631 48 24ZM20.8477 32.6908L13.4631 25.3062C13.2914 25.1347 13.1553 24.9311 13.0624 24.707C12.9694 24.4829 12.9216 24.2426 12.9216 24C12.9216 23.7574 12.9694 23.5172 13.0624 23.293C13.1553 23.0689 13.2914 22.8653 13.4631 22.6938L20.8477 15.3092C21.1941 14.9628 21.6639 14.7682 22.1538 14.7682C22.6438 14.7682 23.1136 14.9628 23.46 15.3092C23.8064 15.6557 24.001 16.1255 24.001 16.6154C24.001 17.1053 23.8064 17.5751 23.46 17.9215L19.2254 22.1539L33.2308 22.1539C33.7204 22.1539 34.19 22.3484 34.5362 22.6946C34.8824 23.0408 35.0769 23.5104 35.0769 24C35.0769 24.4896 34.8824 24.9592 34.5362 25.3054C34.19 25.6517 33.7204 25.8462 33.2308 25.8462L19.2254 25.8462L23.46 30.0785C23.8064 30.4249 24.001 30.8947 24.001 31.3846C24.001 31.8745 23.8064 32.3444 23.46 32.6908C23.1136 33.0372 22.6438 33.2318 22.1538 33.2318C21.6639 33.2318 21.1941 33.0372 20.8477 32.6908Z'
          fill='#C8D6C5'
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className='embla__button embla__button--next'
      type='button'
      {...restProps}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='48'
        height='48'
        viewBox='0 0 48 48'
        fill='none'
      >
        <circle
          cx='24.5999'
          cy='24'
          r='16.2'
          transform='rotate(-90 24.5999 24)'
          fill='#202023'
        />
        <path
          d='M3.14722e-06 24C2.52476e-06 28.7467 1.40758 33.3869 4.04473 37.3337C6.68188 41.2805 10.4302 44.3566 14.8156 46.1731C19.201 47.9896 24.0266 48.4649 28.6822 47.5388C33.3377 46.6128 37.6141 44.327 40.9706 40.9706C44.327 37.6141 46.6128 33.3377 47.5388 28.6822C48.4649 24.0266 47.9896 19.201 46.1731 14.8156C44.3566 10.4302 41.2805 6.68189 37.3337 4.04473C33.3869 1.40758 28.7468 7.58438e-06 24 6.96192e-06C17.6369 0.00672381 11.5363 2.53745 7.03686 7.03686C2.53745 11.5363 0.00672356 17.6369 3.14722e-06 24ZM27.1523 15.3092L34.5369 22.6938C34.7086 22.8653 34.8447 23.0689 34.9376 23.293C35.0306 23.5172 35.0784 23.7574 35.0784 24C35.0784 24.2426 35.0306 24.4828 34.9376 24.707C34.8447 24.9311 34.7086 25.1347 34.5369 25.3062L27.1523 32.6908C26.8059 33.0372 26.3361 33.2318 25.8461 33.2318C25.3562 33.2318 24.8864 33.0372 24.54 32.6908C24.1936 32.3444 23.999 31.8745 23.999 31.3846C23.999 30.8947 24.1936 30.4249 24.54 30.0785L28.7746 25.8462L14.7692 25.8461C14.2796 25.8461 13.81 25.6516 13.4638 25.3054C13.1176 24.9592 12.9231 24.4896 12.9231 24C12.9231 23.5104 13.1176 23.0408 13.4638 22.6946C13.81 22.3483 14.2796 22.1538 14.7692 22.1538L28.7746 22.1538L24.54 17.9215C24.1936 17.5751 23.999 17.1053 23.999 16.6154C23.999 16.1255 24.1936 15.6556 24.54 15.3092C24.8864 14.9628 25.3562 14.7682 25.8461 14.7682C26.3361 14.7682 26.8059 14.9628 27.1523 15.3092Z'
          fill='#C8D6C5'
        />
      </svg>
      {children}
    </button>
  );
};
