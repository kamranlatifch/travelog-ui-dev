import React from 'react';
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@components';
import Image1 from '../assets/images/Destination1.png';

import Image2 from '../assets/images/Destination2.png';
import Image3 from '../assets/images/Destination3.png';
import { DestinationCard } from './DestinationCard';
const TopDestinations = () => {
  const data = [
    {
      id: 1,
      img: Image1,
      price: '550.16',
      title: 'Paradise Beach, Bantayan Island',
      city: 'Rome, Italy',
      rating: '4.8',
    },
    {
      id: 2,
      img: Image2,
      price: '20.99',
      title: 'Ocean with full of Colors',
      city: 'Maldives',
      rating: '4.5',
    },
    {
      id: 3,
      img: Image3,
      price: '150.99',
      title: 'Mountain View, Above the cloud',
      city: 'United Arab Emeries ',
      rating: '5.0',
    },
  ];
  return (
    <div className='flex flex-col px-4 py-8 lg:px-16 xl:px-[128px] gap-16'>
      <div className='flex flex-col gap-4 '>
        <h6 className='text-center xl:text-start tracking-[5px] uppercase'>
          Top Destination
        </h6>
        <h3 className='text-center xl:text-start'>Explore top destination</h3>
      </div>

      <div className='flex flex-col pt-6 xl:pt-0'>
        <Carousel className='relative '>
          <CarouselContent>
            {data.map((item) => (
              <>
                <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
                  <DestinationCard
                    image={item.img}
                    title={item.title}
                    price={item.price}
                    city={item.city}
                    rating={item.rating}
                  />
                </CarouselItem>
              </>
            ))}
          </CarouselContent>
          <CarouselPrevious className='absolute -top-[74px] xl:-top-[124px] left-0 lg:left-[44%] xl:left-[90%] rounded-full p-6 text-textPrimary hover:bg-purpleBg hover:text-textLight' />
          <CarouselNext className='absolute -top-[74px] xl:-top-[124px] right-0 lg:right-[44%] xl:right-0 rounded-full p-6 text-textPrimary hover:bg-purpleBg hover:text-textLight' />
        </Carousel>
      </div>
    </div>
  );
};

export { TopDestinations };
