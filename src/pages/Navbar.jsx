import React from 'react';
import { Logo, Humberger } from '@assets/svgs';
import {
  Button,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@components';

const Navbar = () => {
  return (
    <div className='px-4 lg:px-16 xl:px-[128px] py-9'>
      <div className='flex flex-row justify-between mx-auto lg:max-w-[896px] xl:max-w-[1184px]'>
        <div className='flex gap-4 justify-center items-center lg:order-2 xl:order-1'>
          <Logo />
          <h1 className='text-2xl font-[900] font-inter'>Travlog</h1>
        </div>

        <Sheet>
          <SheetTrigger className='bg-transparent xl:hidden  p-0'>
            <Humberger />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription className='flex flex-col justify-center items-center'>
                <nav className='flex flex-col gap-16  justify-center items-center'>
                  <a className='text-textPrimaryDark' href=''>
                    Home
                  </a>
                  <a href=''>Discover</a>
                  <a href=''>Special Deals</a>
                  <a href=''>Contact</a>
                </nav>

                <Button className='bg-cardBg lg:hidden hover:text-textLight mt-6 shadow-none font-inter py-4 px-8 rounded-full text-sm font-bold text-primary'>
                  Log In
                </Button>
                <Button className='bg-purpleBg lg:hidden mt-6 py-4 px-8 rounded-full text-sm text-textLight font-inter font-bold'>
                  Sign Up
                </Button>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <nav className='hidden xl:flex xl:flex-row gap-16 xl:order-2 justify-center items-center'>
          <a className='text-textPrimaryDark' href=''>
            Home
          </a>
          <a href=''>Discover</a>
          <a href=''>Special Deals</a>
          <a href=''>Contact</a>
        </nav>

        <div className='hidden lg:flex lg:flex-row lg:gap-2 lg:order-3 justify-center items-center'>
          <Button className='bg-cardBg hover:text-textLight shadow-none font-inter py-4 px-8 rounded-full text-sm font-bold text-primary'>
            Log In
          </Button>
          <Button className='bg-purpleBg py-4 px-8 rounded-full text-sm text-textLight font-inter font-bold'>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
