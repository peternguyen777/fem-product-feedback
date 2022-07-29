import React from "react";
import Button1 from "../UI/Button1";
import Link from "next/link";

function Header() {
  return (
    <div className='w-full bg-navy px-6'>
      <div className='flex h-[100px] items-center justify-between '>
        <div className='space-y-1'>
          <Link href='/'>
            <div className='flex cursor-pointer items-center '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mr-4 h-[10px] w-[7px] stroke-white stroke-2'
              >
                <path d='M6 9L2 5l4-4' fill='none' fillRule='evenodd' />
              </svg>
              <p className='body3 text-white'>Go Back</p>
            </div>
          </Link>
          <h3 className='text-white'>Roadmap</h3>
        </div>
        <Button1>+ Add Feedback</Button1>
      </div>
    </div>
  );
}

export default Header;
