'use client';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PriceCard, PriceCardBlack } from './Subscription';
import Image from 'next/image';
import stars from '@/public/stars.svg';

const SubsCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          <div className='embla__slide max-sm:embla__slide_sm'>
            <PriceCard
              heading={'office'}
              width='100%'
              para1={`Our Office package is perfect for startups and small businesses wanting to shine online! We create logos, develop brand identities, and design eye-catching websites.`}
              para2={`Get ready for personalized attention and creative solutions that will make your business stand out and grow!`}
            />
          </div>
          <div className='embla__slide max-sm:embla__slide_sm'>
            <PriceCardBlack
              heading={'business'}
              width='100%'
              para1={`Our Business package turbocharges your market presence with top-tier websites, killer marketing, and sleek design.`}
              para2={`Harness cutting-edge data and predictive analytics to propel your growth goals with flair!`}
            />
            <div className='flex mt-2 justify-between items-center lg:gap-24 gap-16 max-tablet:gap-2'>
              <p className='text-xs'>{'//Most Preferred package//'}</p>
              <Image src={stars} alt='stars' />
            </div>
          </div>
          <div className='embla__slide max-sm:embla__slide_sm'>
            <PriceCard
              heading={'pro'}
              width='100%'
              para1={`Our Pro package offers custom apps, interactive designs, and strategic branding for leaders and innovators.`}
              para2={`Dive into advanced data solutions like machine learning and big data analytics to solve your toughest challenges and shine in a competitive world!`}
            />
          </div>
        </div>
      </div>

      <div className='embla__controls max-lg:reduce-gap max-sm:gap-4'>
        <div className='embla__buttons max-sm:flex max-sm:justify-between'>
          <div className='max-sm:grid-span-1'>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          </div>
          <div className='max-sm:hidden'>
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>

        <div className='embla__dots max-sm:grid-span-2 max-sm:justify-self-end max-sm:pr-0'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
        <div className='embla__buttons hidden max-sm:block max-sm:justify-self-end md:hidden'>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default SubsCarousel;
