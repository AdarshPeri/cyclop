import logo from '@/public/Logo.svg';
import eye from '@/public/eye.svg';
import facebook from '@/public/facebook.svg';
import hamburger from '@/public/hamburger.svg';
import instagram from '@/public/instagram.svg';
import linkedin from '@/public/linkedin.svg';


import Image from 'next/image';
export default function NavigationWithLogo() {
  return (
    <div className='bg-primary-50 flex p-6 max-xs:p-4 items-center gap-6 h-20 border border-primary-100 w-[90%] lg:w-[80%] xl:w-[75%] mt-16 mx-auto rounded-lg'>
      <div className='relative w-5 h-4 cursor-pointer'>
        <Image src={hamburger} fill alt='hamburger' />
      </div>
      {/* <p
        className={`${takino.variable} font-takino text-4xl max-sm:text-3xl py-0 my-0 mt-2 cursor-pointer`}
      >
        CYCL
        <span className='rotate-90 inline-block -translate-x-1 -translate-y-1 relative'>
          O
          <Image
          src={eye}
          alt='eye'
          className='absolute top-[21%] max-sm:left-[11.5%] left-[17.5%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-blink-x'
        />
        </span>
        P
 
      </p> */}
      <div className='relative'>
        <Image src={logo} alt='logo' className='h-10 w-36'/>
        <Image src={eye} alt='eye' className='absolute top-[38%] left-[66.5%] w-5 max-xs:w-4 max-xs:top-[39%] max-xs:left-[67%] animate-blink'/>
      </div>
      <SocialMedia />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className='relative flex gap-1 ml-auto'>
      <div className='rounded-full flex h-8 w-8 items-center justify-center bg-primary-100 cursor-pointer'>
        <div className='h-4 w-4'>
          <Image src={facebook} alt='facebook' />
        </div>
      </div>
      <div className='rounded-full flex h-8 w-8 items-center justify-center bg-primary-100 cursor-pointer'>
        <div className='h-4 w-4 self-center'>
          <Image src={linkedin} alt='linkedin' />
        </div>
      </div>
      <div className='rounded-full flex h-8 w-8 items-center justify-center bg-primary-100 cursor-pointer'>
        <div className='h-4 w-4 self-center'>
          <Image src={instagram} alt='instagram' />
        </div>
      </div>
    </div>
  );
}
