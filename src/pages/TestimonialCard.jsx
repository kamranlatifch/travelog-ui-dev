import React, { useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@components';
import { RatingSvg } from '@assets/svgs';

const TestimonialCard = ({ image, name, title, rating, description }) => {
  return (
    <Card className='flex flex-col items-center justify-center text-center pt-16 gap-16 border-none shadow-none bg-transparent'>
      <div className='overflow-hidden rounded-full h-[128px] w-[128px] '>
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>

      <CardContent className='flex flex-col items-center gap-16 '>
        <CardTitle className='flex flex-col items-center gap-8'>
          <h4 className='font-bold text-[28px] text-textOrange'>
            {name}
            <span className='text-textPrimaryHigherRatio text-[20px]'>
              {' '}
              / {title}
            </span>
          </h4>
          <div className='flex gap-4'>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingSvg
                key={index}
                className={index < rating ? 'text-[#FACD49]' : 'text-gray-300'}
              />
            ))}
          </div>
        </CardTitle>

        <CardDescription>
          <p className='text-lg text-center text-gray-600 lg:px-4 xl:text-2xl'>
            {description}
          </p>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export { TestimonialCard };
