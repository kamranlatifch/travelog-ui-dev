// import React from 'react';
// import {
//   Button,
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
//   Card,
//   CardHeader,
//   CardFooter,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from '@components';
// import { RatingSvg } from '@assets/svgs';
// const DestinationCard = ({ image, price, title, city, rating }) => {
//   return (
//     <div className='flex flex-col rounded-[32px]  bg-cardBg justify-center items-center'>
//       <img src={image} alt={title} className='w-full h-[314px]' />
//       <div className='flex flex-col gap-2 p-8 w-full text-start  shadow-cardShadow border rounded-b-[32px] '>
//         <h6>${price}</h6>
//         <h4 className='font-inter font-bold text-2xl p-0 m-0'>{title}</h4>
//         <p className='text-[18px] text-start mt-2'>{city}</p>
//         <div className='flex flex-row justify-start items-center gap-2 mt-6'>
//           <h5 className='font-inter font-bold text-2xl text-textOrange'>
//             {rating}
//           </h5>
//           <RatingSvg />
//         </div>
//       </div>
//     </div>
//   );
// };

// export { DestinationCard };

import React from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@components';
import { RatingSvg } from '@assets/svgs';

const DestinationCard = ({ image, price, title, city, rating }) => {
  return (
    <Card className='rounded-[32px] mb-10 shadow-cardShadow border bg-cardBg h-[575px] xl:w-[375px]'>
      <div className='w-full h-[314px] overflow-hidden rounded-t-[32px]'>
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>
      <CardContent className='p-8 flex flex-col gap-4'>
        <CardTitle className='flex flex-col xl:flex-row-reverse  gap-2'>
          <h6>${price}</h6>
          <h4 className='font-inter font-bold text-2xl p-0 m-0'>{title}</h4>
        </CardTitle>
        <CardDescription>
          <p className='text-[18px] text-start mt-2'>{city}</p>
        </CardDescription>
      </CardContent>
      <CardFooter className='flex flex-row items-center gap-2 px-8'>
        <h5 className='text-2xl font-bold text-textOrange'>{rating}</h5>
        <RatingSvg />
      </CardFooter>
    </Card>
  );
};

export { DestinationCard };
