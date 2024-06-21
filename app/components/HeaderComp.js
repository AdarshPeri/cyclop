import Image from 'next/image';

export default function HeaderComp({ imageSource, text, title }) {
  return (
    <div className='w-[90%] lg:w-[80%] xl:w-[75%] bg-primary-100 mt-10'>
      <Image src={imageSource} alt='heading' />
      {title && <p className='uppercase text-2xl mt-8 font-bold'>{title}</p>}
      <p className={`${title ? 'mt-2' : 'mt-8'}`}>{text}</p>
    </div>
  );
}
