import React from 'react';
import {
  ClientTripAdvisor,
  ClientExpedia,
  ClientBooking,
  ClientAirBnB,
  ClientOrbits,
} from '@assets/svgs';
const Clients = () => {
  return (
    <div className='flex flex-row justify-center items-center flex-wrap  gap-[26px] xl:gap-[98px] px-4 py-8 xl:py-16 lg:px-[164px] xl:px-[128px] lg:w-[896px] xl:w-auto lg:mx-auto'>
      <ClientTripAdvisor className='lg:w-[211px] lg:h-[32px]' />
      <ClientExpedia className='lg:w-[113px] lg:h-[32px]' />
      <ClientBooking className='lg:w-[188px] lg:h-[32px]' />
      <ClientAirBnB className='lg:w-[102px] lg:h-[32px]' />
      <ClientOrbits className='lg:w-[173px] lg:h-[32px]' />
    </div>
  );
};

export { Clients };
