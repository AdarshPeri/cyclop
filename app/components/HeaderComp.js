import Image from 'next/image';


export default function HeaderComp({ imageSource, text }) {
  return (
    <div className='w-[90%] lg:w-[80%] xl:w-[75%] bg-primary-100 mt-10'>
      <Image src={imageSource} alt='heading' />
      <p className='mt-8'>{text}</p>
    </div>
  );
}
