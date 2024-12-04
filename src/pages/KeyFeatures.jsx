import React from 'react';
import Image1 from '../assets/images/KeyFeatureMain.png';
import { MapSvg, CalendarSvg, CouponSvg } from '@assets/svgs';

const KeyFeatures = () => {
  return (
    <div className='flex flex-col xl:flex-row-reverse px-4 lg:px-16 xl:px-0 xl:pl-[128px]  py-8 lg:py-16 gap-16 lg:gap-[70px] '>
      <div className='px-6 lg:px-20 xl:px-0'>
        <img src={Image1} alt='travel' className='w-full h-full object-cover' />
      </div>

      <div className='flex flex-col px-8 xl:px-0 gap-8 xl:w-[550px] '>
        <div className='flex flex-col gap-4 px'>
          <h6 className='text-center xl:text-start tracking-[5px] lg:text-2xl uppercase '>
            Key features
          </h6>
          <h3 className='text-center lg:text-[40px] xl:text-[44px] xl:text-start'>
            We offer best services
          </h3>
          <p className='pt-4 px-1 lg:text-lg xl:text-start'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>

        <div className='flex flex-col  gap-2  md:gap-0'>
          <div className='flex flex-col md:flex-row gap-8  hover:border-[1px] hover:border-[#1918251A] rounded-[32px] p-8'>
            <MapSvg />
            <div className='flex flex-col gap-2'>
              <h4 className='font-inter font-bold text-[23px] text-textPrimary'>
                We offer best services
              </h4>
              <p className='font-inter text-[18px] font-normal text-start'>
                Lorem Ipsum is not simply random text
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-8  hover:border-[1px] hover:border-[#1918251A] rounded-[32px] p-8'>
            <CalendarSvg />
            <div className='flex flex-col gap-2'>
              <h4 className='font-inter font-bold text-[23px] text-textPrimary'>
                Schedule your trip
              </h4>
              <p className='font-inter text-[18px] font-normal text-start'>
                It has roots in a piece of classical
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-8  hover:border-[1px] hover:border-[#1918251A] rounded-[32px] p-8'>
            <CouponSvg />
            <div className='flex flex-col gap-2'>
              <h4 className='font-inter font-bold text-[23px] text-textPrimary'>
                Get discounted coupons
              </h4>
              <p className='font-inter text-[18px] font-normal text-start'>
                Lorem Ipsum is not simply random text
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { KeyFeatures };
