import React from 'react';
import { ServiceCard } from './ServiceCard';
import Image1 from '../assets/images/ServiceTour.png';

import Image2 from '../assets/images/ServiceBooking.png';
import Image3 from '../assets/images/ServiceCloud.png';

const Services = () => {
  const data = [
    {
      id: 1,
      img: Image1,
      title: 'Best Tour Guide',
      label: 'What looked like a small patch of purple grass, above five feet.',
    },
    {
      id: 2,
      img: Image2,
      title: 'Easy Booking',
      label: 'Square, was moving across the sand in their direction.',
    },
    {
      id: 3,
      img: Image3,
      title: 'Weather Forecast',
      label: 'What looked like a small patch of purple grass, above five feet.',
    },
  ];
  return (
    <div className='flex flex-col xl:flex-row items-center px-4 lg:px-16 lg:py-16 py-8 gap-8 lg:gap-16 xl:gap-0 xl:px-0 xl:pl-[128px] xl:overflow-auto'>
      <div className='flex flex-col gap-4 xl:min-w-[444px]'>
        <h6 className='text-center xl:text-start lg:text-2xl tracking-[5px] uppercase'>
          Services
        </h6>
        <h3 className='text-center xl:text-start lg:text-[48px] xl:text-[44px]'>
          Our top value categories for you
        </h3>
      </div>

      <div className='flex flex-col justify-center  lg:flex-row gap-4 xl:gap-[21px] '>
        {data.map((item) => (
          <ServiceCard image={item.img} title={item.title} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export { Services };
