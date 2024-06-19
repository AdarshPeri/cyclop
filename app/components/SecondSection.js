import Subscription from './Subscription';
import WhatWeDo from './WhatWeDo';
import WhatWeOffer from './WhatWeOffer';
import WhyWeDo from './WhyWeDo';

export default function SecondSection() {
  return (
    <div className='min-h-screen bg-tertiary-200 flex flex-col items-center'>
      <WhatWeDo />
      <WhatWeOffer />
      <Subscription />
      <WhyWeDo />
    </div>
  );
}
