import Subscription from './Subscription';
import WhatWeDo from './WhatWeDo';
import WhatWeOffer from './WhatWeOffer';
import WhyWeDo from './WhyWeDo';

// const svgStyle = {
//   visibility: 'hidden',
//   position: 'absolute',
// };
export default function SecondSection() {
  return (
    <div className='min-h-screen bg-tertiary-200 flex flex-col items-center secondary-clip'>
      <WhatWeDo />
      <WhatWeOffer />
      <Subscription />
      <WhyWeDo />
    </div>
  );
}

/*
<label htmlFor="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-100">
	<input id="Toggle3" type="checkbox" className="hidden peer" />
	<span className="px-4 py-2 rounded-l-md dark:bg-violet-600 peer-checked:dark:bg-gray-700">Monthly</span>
	<span className="px-4 py-2 rounded-r-md dark:bg-gray-700 peer-checked:dark:bg-violet-600">Annually</span>
</label>
*/
