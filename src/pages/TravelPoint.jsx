import React from 'react';
import Image1 from '../assets/images/TravelPointImg.png';
import Image2 from '../assets/images/TP2.png';

const TravelPoint = () => {
  return (
    <div className='flex flex-col xl:flex-row px-4 lg:p-16 xl:px-0 xl:py-16 gap-16 xl:gap-0 xxl:justify-center '>
      <div className='lg:px-8 xl:px-0 '>
        <img src={Image1} alt='travel' className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col gap-8 lg:gap-16 lg:px-8 xl:px-0 xl:w-[441px] xl:self-end xl:relative'>
        <div className='flex flex-col gap-4 px-1'>
          <h6 className='text-center xl:text-start tracking-[5px] uppercase lg:text-[23px]'>
            Travel Point
          </h6>
          <h3 className='text-center lg:text-[40px] xl:text-[44px] xl:text-start xl:leading-[52px]'>
            We helping you find your dream location
          </h3>
          <p className='pt-4 lg:text-lg xl:text-start'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>

        <div className='grid  md:grid-cols-2 gap-4 '>
          <div className='flex flex-col gap-4 justify-center items-center border-[1px] border-[#1918251A] rounded-[32px] p-8'>
            <h4 className='font-inter font-bold text-[35px] text-textOrange'>
              500+
            </h4>
            <span className='font-inter text-[18px] font-normal'>
              Holiday Package
            </span>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center  border-[1px] border-[#1918251A] rounded-[32px] p-8'>
            <h4 className='font-inter font-bold text-[35px] text-textOrange'>
              100
            </h4>
            <span className='font-inter text-[18px] font-normal'>
              Luxury Hotel
            </span>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center  border-[1px] border-[#1918251A] rounded-[32px] p-8'>
            <h4 className='font-inter font-bold text-[35px] text-textOrange'>
              7
            </h4>
            <span className='font-inter text-[18px] font-normal'>
              Premium Airlines
            </span>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center  border-[1px] border-[#1918251A] rounded-[32px] p-8'>
            <h4 className='font-inter font-bold text-[35px] text-textOrange'>
              2k+
            </h4>
            <span className='font-inter text-[18px] font-normal'>
              Happy Customer
            </span>
          </div>
        </div>
        <img
          src={Image2}
          alt='travel'
          className='hidden xl:flex absolute top-[193px] left-[292px]'
        />
      </div>
    </div>
  );
};

export { TravelPoint };
