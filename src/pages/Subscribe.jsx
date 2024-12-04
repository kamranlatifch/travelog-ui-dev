import React from 'react';
import { Input, Button } from '@components';
import { Email, SubscribeSvg } from '@assets/svgs';
const Subscribe = () => {
  return (
    <div className='px-4 lg:px-16 xl:px-[128px] py-16'>
      <div className='flex flex-col px-6 lg:px-16 py-16 lg:py-[128px]  gap-16 bg-subscribeBg rounded-[32px] lg:relative lg:w-[897px] xl:w-[1184px] lg:justify-center lg:mx-auto '>
        <div className='flex flex-col gap-8 '>
          <h6 className='text-center tracking-[5px] lg:text-2xl uppercase '>
            subscribe to our newsletter
          </h6>
          <h3 className='text-center lg:text-[40px] xl:text-[55px] leading-[38px] lg:leading-[48px] xl:leading-[66px] px-2  '>
            Prepare yourself & let’s explore the beauty of the world
          </h3>
        </div>

        <div className='flex flex-col md:flex-row gap-8'>
          <div className='relative md:w-full  md:items-center '>
            <Input
              className='pl-14 pr-4 py-6 lg:py-8  border-none bg-cardBg font-inter font-bold text-sm'
              placeholder='Your Email'
            />
            <Email className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' />
          </div>
          <Button className='px-16 py-6 lg:py-8 bg-purpleBg rounded-2xl'>
            Subscribe
          </Button>
        </div>
        <SubscribeSvg className='hidden lg:flex absolute -top-16 -left-9' />
      </div>
    </div>
  );
};

export { Subscribe };
