import React from "react";

function UpvoteH({ upvoteScore, onClick }) {
  return (
    <div
      className='group flex h-8 w-fit cursor-pointer select-none items-center rounded-[10px] bg-bluegray px-4 hover:bg-[#CFD7FF] active:bg-blue lg:h-10'
      onClick={onClick}
    >
      <div className='flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='mr-3 h-[7px] w-[10px] stroke-[#4661E6] stroke-2 group-active:stroke-white'
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

export default UpvoteH;
