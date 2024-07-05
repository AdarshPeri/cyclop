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
          <div className='embla__slide max-sm:embla__slide_sm md:max-tablet:embla__slide_md'>
            <PriceCard
              heading={'office'}
              width='100%'
              para1={`Our Office package is perfect for startups and small businesses wanting to shine online! We develop brand identities and design eye-catching websites.`}
              para2={`Get ready for personalized attention and creative solutions that will make your business stand out!`}
            />
          </div>
          <div className='embla__slide max-sm:embla__slide_sm md:max-tablet:embla__slide_md'>
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
          <div className='embla__slide max-sm:embla__slide_sm md:embla__slide_md'>
            <PriceCard
              heading={'pro'}
              width='100%'
              para1={`Our Pro package offers custom apps, interactive designs, and strategic branding for leaders and innovators.`}
              para2={`Dive into advanced data solutions like machine learning and big data analytics to solve your toughest challenges!`}
            />
          </div>
        </div>
      </div>

      <div className='embla__controls max-lg:reduce-gap max-tablet:gap-4'>
        <div className='embla__buttons max-tablet:flex max-tablet:justify-between'>
          <div className='max-tablet:grid-span-1'>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          </div>
          <div className='max-tablet:hidden'>
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>

        <div className='embla__dots max-tablet:grid-span-2 max-tablet:justify-self-end max-tablet:pr-0'>
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
        <div className='embla__buttons hidden max-tablet:block max-tablet:justify-self-end tablet:hidden'>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default SubsCarousel;
