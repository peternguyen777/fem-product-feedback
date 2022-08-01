import React from "react";
import Button1 from "../UI/Button1";
import Link from "next/link";

function Header() {
  return (
    <div className='w-full bg-navy px-6 md:mx-10 md:mt-14 md:w-auto md:rounded-[10px] md:px-8 lg:mt-[94px]'>
      <div className='flex h-[100px] items-center justify-between md:h-[113px]'>
        <div className='space-y-1'>
          <Link href='/'>
            <div className='flex cursor-pointer items-center '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mr-4 h-[10px] w-[7px] stroke-white stroke-2'
              >
                <path d='M6 9L2 5l4-4' fill='none' fillRule='evenodd' />
              </svg>
              <p className='body3 text-white md:hidden'>Go Back</p>
              <h4 className='hidden text-white md:block'>Go Back</h4>
            </div>
          </Link>
          <h3 className='text-white md:hidden'>Roadmap</h3>
          <h1 className='hidden text-white md:block'>Roadmap</h1>
        </div>
        <Button1 href='/feedback/new/'>+ Add Feedback</Button1>
      </div>
    </div>
  );
}

export default Header;
