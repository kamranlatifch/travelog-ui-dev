import React from 'react';
import Image1 from '../assets/images/HeroImg1.png';
import Image2 from '../assets/images/HeroImg2.png';
import Image3 from '../assets/images/HeroImg3.png';
import {
  HeroIcon1,
  HeroIcon2,
  HeroMapIcon,
  VideoPlayIcon,
  HeroExploreIcon,
  Arrows,
} from '@assets/svgs';
import { Button } from '@components';

const Hero = () => {
  return (
    <div className='relative flex flex-col xl:flex-row-reverse gap-8 lg:gap-[70px] px-4 py-8 lg:px-16 lg:py-16 lg:w-[896px] xl:w-[1184px] lg:mx-auto'>
      <div className='relative flex mx-auto bg-hero-bg bg-no-repeat bg-contain px-12 w-[396px] h-[366px] lg:w-[772px] lg:h-[713px] lg:justify-center lg:items-center'>
        <div className='flex flex-row pt-[32px] lg:pt-[62px] xl:pt-[32px] xl:pl-[41px] xl:pr-[41px] xl:w-[575px] gap-4 justify-center items-center '>
          <div className='flex flex-col gap-4'>
            <img
              src={Image1}
              alt='img-1'
              className='min-w-[140px] lg:w-[272px] min-h-[154px] lg:h-[300px]'
            />
            <img
              src={Image2}
              alt='img-2'
              className='min-w-[140px] lg:w-[272px] min-h-[154px] lg:h-[300px]'
            />
          </div>
          <img
            src={Image3}
            alt='img-3'
            className='min-w-[140px] min-h-[205px] lg:w-[272px] lg:h-[400px]'
          />
        </div>

        <HeroIcon1 className='absolute top-[170px] left-[18px] lg:left-[78px] lg:top-[360px] xl:top-[345px] xl:left-[68px]' />
        <HeroIcon2 className='absolute left-[230px] -bottom-[50px] lg:left-[436px] lg:-bottom-[30px]' />
        <div className='flex absolute bg-cardBg rounded-full gap-1 pl-4 py-1 bottom-[92px] items-center lg:bottom-[213px] right-0 lg:-right-[20px] w-[85px] lg:w-[166px] text-nowrap shadow-cardShadow'>
          <HeroMapIcon />
          <p className='font-inter font-bold text-[8px]'>Top Places</p>
        </div>
      </div>

      <div className=' flex  flex-col gap-4 lg:gap-11 lg:mx-auto justify-center items-center lg:w-[896px] xl:w-[412px]'>
        <div className='flex bg-cardBg gap-[18px] rounded-full px-8 py-4 justify-center items-center  shadow-cardShadow'>
          <p className='font-inter font-bold text-sm text-textPink'>
            Explore the world!
          </p>

          <HeroExploreIcon />
        </div>
        <h1 className='text-center xl:text-start lg:text-[56px] lg:w-[696px] xl:w-auto'>
          Travel{' '}
          <span className='text-textPink font-poppin '>top destination</span> of
          the world
        </h1>
        <p className='mt-2 lg:text-[18px] lg:w-[436px] xl:w-auto xl:text-start'>
          We always make our customer happy by providing as many choices as
          possible{' '}
        </p>
        <div className='flex flex-col mt-4 gap-6 w-full lg:w-auto lg:flex-row'>
          <Button className='bg-purpleBg px-8 py-6 rounded-full font-poppins font-bold text-sm'>
            Get Started
          </Button>
          <Button className='bg-transparent text-textPrimary px-8 py-6 rounded-full font-poppins font-bold text-sm '>
            <VideoPlayIcon /> Watch Demo
          </Button>
        </div>
      </div>
      <Arrows className='hidden lg:flex absolute -left-6 -bottom-4 xl:-bottom-12 xl:-left-20' />
    </div>
  );
};

export { Hero };
