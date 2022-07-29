import React from "react";

function UpvoteV({ upvoteScore }) {
  return (
    <div className='group hidden w-10 cursor-pointer select-none items-center rounded-[10px] bg-bluegray pt-[14px] pb-2 hover:bg-[#CFD7FF] active:bg-blue md:inline-flex'>
      <div className='mx-auto flex flex-col items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='mb-2 h-[7px] w-[10px] stroke-[#4661E6] stroke-2 group-active:stroke-white'
        >
          <path d='M1 6l4-4 4 4' fill='none' fillRule='evenodd' />
        </svg>
        <p className='body3 font-bold text-lightnavy group-active:text-white'>
          {upvoteScore}
        </p>
      </div>
    </div>
  );
}

export default UpvoteV;
