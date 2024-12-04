import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@components';
import { Logo, Facebook, Instagram, Twitter, FooterSvg } from '@assets/svgs';
const Footer = () => {
  return (
    <div className='flex flex-col xl:flex-row px-4 lg:px-16 xl:px-[128px] lg:gap-16 py-16 lg:relative xl:justify-center'>
      <div className='flex flex-col gap-8 xl:w-[560px]'>
        <div className='flex gap-4 '>
          <Logo />
          <h1 className='text-2xl font-[900] font-inter '>Travlog</h1>
        </div>
        <p className='text-start lg:text-[24px] leading-[36px]'>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className='flex gap-8'>
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>

      <div className='flex flex-col pt-16 lg:hidden'>
        <Accordion
          type='single'
          collapsible
          className='w-full bg-none flex flex-col md:flex-row md:justify-between lg:hidden gap-8'
        >
          <AccordionItem value='item-1' className='border-none '>
            <AccordionTrigger className='bg-transparent md:flex md:gap-10 px-0 text-textPrimary no-underline'>
              Company
            </AccordionTrigger>
            <AccordionContent className='grid gap-4 py-2 px-4 text-center border'>
              <a href=''>About</a>
              <a href=''>Career</a>
              <a href=''>Mobile</a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2' className='border-none '>
            <AccordionTrigger className='bg-transparent md:flex md:gap-10 px-0 text-textPrimary no-underline'>
              Contact Us
            </AccordionTrigger>
            <AccordionContent className='grid gap-4 py-2 px-4  text-center border'>
              <a href=''>Why Travlog?</a>
              <a href=''>Partner with us</a>
              <a href=''>FAQ'S</a>
              <a href=''>Blog</a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3' className='border-none '>
            <AccordionTrigger className='bg-transparent px-0 md:flex md:gap-10 text-textPrimary no-underline'>
              Meet Us
            </AccordionTrigger>
            <AccordionContent className='grid gap-4 py-2 px-4  text-center border'>
              <a href=''>+00 92 1234 56789</a>
              <a href=''>info@travlog.com</a>
              <a href=''>205. R Street, New York BD23200 </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='hidden lg:flex flex-row justify-between xl:w-[560px]'>
        <div className='flex flex-col gap-8'>
          <h6 className='text-textPrimary'>Company</h6>
          <a href=''>About</a>
          <a href=''>Career</a>
          <a href=''>Mobile</a>
        </div>
        <div className='flex flex-col gap-8'>
          <h6 className='text-textPrimary'>Contact</h6>
          <a href=''>Why Travlog?</a>
          <a href=''>Partner with us</a>
          <a href=''>FAQ’s</a>
          <a href=''>Blog</a>
        </div>
        <div className='flex flex-col gap-8'>
          <h6 className='text-textPrimary'>Meet Us</h6>
          <a href=''>+00 92 1234 56789</a>
          <a href=''>info@travlog.com</a>
          <a href=''>205. R Street, New York</a>
          <a href='' className='-mt-6'>
            BD23200
          </a>
        </div>
      </div>
      <FooterSvg className='hidden lg:flex absolute -top-[75px] right-0' />
    </div>
  );
};

export { Footer };
