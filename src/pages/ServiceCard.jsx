import React from 'react';

const ServiceCard = ({ image, title, label }) => {
  return (
    <div className='flex flex-col p-8 lg:p-16 rounded-[32px] bg-cardBg gap-8 lg:gap-16 justify-center items-center shadow-cardShadow border lg:w-[288px] xl:w-[350px] xl:h-[443px]'>
      <img src={image} alt={title} />
      <h4 className='font-inter font-bold text-2xl lg:text-[28px] text-center '>
        {title}
      </h4>
      <p className='text-[18px] '>{label}</p>
    </div>
  );
};

export { ServiceCard };
