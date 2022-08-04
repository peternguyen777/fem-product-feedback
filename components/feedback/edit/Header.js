import React from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <div
      className='flex cursor-pointer items-center'
      onClick={() => router.back()}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='mr-4 h-[10px] w-[7px] stroke-blue stroke-2'
      >
        <path d='M6 9L2 5l4-4' fill='none' fillRule='evenodd' />
      </svg>
      <p className='body3 text-gray md:hidden'>Go Back</p>
      <h4 className='hidden text-gray md:block'>Go Back</h4>
    </div>
  );
}

export default Header;
