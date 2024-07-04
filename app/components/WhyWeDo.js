import star from '@/public/small-star.svg';
import arrow from '@/public/right-arrow2.svg';
import footer from '@/public/footer.svg';
import section2 from '@/public/sec2mob.svg';

import Image from 'next/image';
import { azeret, rubik } from '../common/FontConstants';
import Link from 'next/link';

export const whyTexts = [
  {
    title: 'Cyclop is different, fast & hassle free.',
    description: `Unlike other business management solutions out there, Cyclop is built to get up and running quickly, grow seamlessly with your business, and be as user-friendly as your favorite tool in the toolbox. Whether you're tech-savvy or just dipping your toes, our Cyclop experts are here to ensure your business zooms ahead with seamless product lifecycle management.`,
  },
  {
    title: 'Cyclop is made to fit.',
    description: `Once we size up your company’s profile, you'll get a personalized software package that suits you to a tee. Mix and match features to fit your exact needs—it's like crafting the perfect playlist for your business! Cyclop isn't just an expense; it's an investment that promises to pay off in record time. Let us tackle your business challenges head-on so we can hit the right notes and resolve issues pronto!`,
  },
  {
    title: 'Cyclop is reliable.',
    description: `With our supercharged cloud security, you're covered 24/7—no worries! Our software amps up your privacy game with role-based access controls that make data protection a breeze. Access from any device is seamless and smooth. Since Cyclop lives in the cloud and plays well with any device, you can summon Cyclop from your trusty web browser for effortlessly epic collaboration and a user-friendly experience!`,
  },
  {
    title: 'Cyclop is ready to assist always.',
    description: `With Cyclop, you're never stranded in the tech jungle alone! We're all about hearing your needs loud and clear—from smooth onboarding to mastering advanced skills, our dedicated experts are your partners in satisfaction. For those sudden "uh-oh" moments, our Cyclop advisors will provide quick consultations on any software hiccup!`,
  },
  {
    title: 'Cyclop spells success for your company.',
    description: `Unlock the magic of Cyclop's unified system! We make operations smoother, speed up processes, and zap paperwork away. With instant access to secure data, roles and procedures are crystal clear, optimizing how resources are used and risks managed. Cyclop supercharges product launches, igniting team motivation and responsibility while turbocharging collaboration across your organization.`,
  },
  {
    title: 'Switch to Cyclop.',
    description: `Thinking about when to switch to Cyclop? Our software is your go-to if you're all about quality, scaling up, facing off against fierce competition, venturing into new markets like explorers, turbocharging product development, or fostering team harmony and collaboration. Hop on the Cyclops train and make it your ultimate ally for success.`,
  },
];

export default function WhyWeDo() {
  return (
    <>
      <div className='flex items-center justify-between w-[90%] lg:w-[80%] xl:w-[75%] mt-20'>
        <div className='flex items-center'>
          <p
            className={`${rubik.className} text-right uppercase text-3xl max-sm:text-1.2xl max-xl:text-2xl max-lg:text-1.2xl mr-2`}
          >
            Why Cyclop?
          </p>
          <div className='h-4 w-4 relative'>
            <Image src={star} alt='star' fill />
          </div>
        </div>
        <Link href='/why-cyclop' className='max-sm:text-xs'>
          <p
            className={`${rubik.className} underline max-lg:text-sm`}
          >
            {'See all >'}
          </p>
        </Link>
      </div>
      <div className='relative flex overflow-hidden w-[99%] md:w-[99%] xl:w-[99%] group'>
        <div className='flex gap-2 mt-10 animate-marquee group-hover:pause'>
          {whyTexts.map((why, index) => (
            <WhyCard key={index} text={why.title} />
          ))}
        </div>
        <div className='absolute top-0 left-2 flex gap-2 mt-10 animate-marquee2 group-hover:pause'>
          {whyTexts.map((why, index) => (
            <WhyCard key={index} text={why.title} />
          ))}
        </div>
      </div>
      <div className='w-[100dvw] relative mt-28'>
        <Image src={footer} alt='footer' className='max-sm:hidden' />
        <Image
          src={section2}
          alt='section-break'
          className='max-sm:block hidden'
        />
        <p
          className={`${azeret.className} text-sm leading-6 w-[90%] lg:w-[80%] xl:w-[75%] absolute top-0 max-sm:-top-[40%] lg:max-xl:left-[10%] xl:left-[13%] left-[5%]`}
        >
          {'//Excited to see you work with us!//'}
        </p>
      </div>
    </>
  );
}

const WhyCard = ({ text }) => {
  return (
    <div className='flex flex-col gap-12 py-14 max-lg:pb-10 pl-16 max-lg:pl-12 pr-10 max-lg:pr-6 justify-center rounded-full bg-white max-tablet:pl-8 max-sm:w-[65vw] md:w-[35vw] lg:w-[32vw] max-sm:py-8 max-sm:px-16 max-sm:gap-4'>
      <p className='text-xl max-lg:text-base'>{text}</p>
      <Link href='/why-cyclop'>
            <Image
        src={arrow}
        alt='arrow'
        className='max-sm:h-6 max-sm:w-6 cursor-pointer'
      />
      </Link>

    </div>
  );
};
