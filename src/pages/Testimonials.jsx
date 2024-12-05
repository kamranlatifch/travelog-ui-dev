import React, { useState } from 'react';
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
import { TestimonialCard } from './TestimonialCard';

const Testimonials = () => {
  const data = [
    {
      id: 1,
      img: Image1,
      name: 'Mark Smith ',
      title: 'Travel Enthusiast',
      rating: '5',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    },
    {
      id: 1,
      img: Image1,
      name: 'John Dow',
      title: 'Fitness Enthusiast',
      rating: '4',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    },

    {
      id: 1,
      img: Image1,
      name: 'Donald Trump',
      title: 'US President',
      rating: '5',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='flex flex-col px-4 py-8 lg:px-[220px] xl:px-[284px] lg:bg-testimonial-bg xl:bg-testimonialXl-bg bg-no-repeat bg-cover bg-center'>
      <div className='flex flex-col gap-4 '>
        <h6 className='text-center tracking-[5px] lg:text-2xl uppercase '>
          Testimonials
        </h6>
        <h3 className='text-center lg:text-[40px] xl:text-[44px] '>
          Trust our clients
        </h3>
      </div>

      <div className='flex flex-col pt-6 xl:pt-0 '>
        <Carousel className='relative '>
          <CarouselContent>
            {data.map((item, index) => (
              <>
                <CarouselItem>
                  <TestimonialCard
                    image={item.img}
                    name={item.name}
                    title={item.title}
                    rating={item.rating}
                    description={item.description}
                    data={data}
                    currentIndex={index}
                  />
                </CarouselItem>
              </>
            ))}
          </CarouselContent>
          <CarouselPrevious className='absolute  -bottom-[64px] lg:bottom-[50%]   left-0  lg:-left-[116px] lg:w-[100px] lg:h-[100px] rounded-full p-6 text-textPrimary hover:bg-purpleBg hover:text-textLight' />
          <CarouselNext className='absolute -bottom-[64px] lg:bottom-[50%]  right-0 lg:-right-[116px] lg:w-[100px] lg:h-[100px] rounded-full p-6 text-textPrimary hover:bg-purpleBg hover:text-textLight' />
        </Carousel>
      </div>
    </div>
  );
};

export { Testimonials };
