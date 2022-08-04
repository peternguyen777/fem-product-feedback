import React from "react";

function UpvoteH({ upvoteScore, onClick, vote }) {
  return (
    <div
      className={`group flex h-8 w-fit cursor-pointer select-none items-center rounded-[10px] px-4  active:bg-blue lg:h-10 ${
        vote ? `bg-blue` : `bg-bluegray hover:bg-[#CFD7FF]`
      }`}
      onClick={onClick}
    >
      <div className='flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`mr-3 h-[7px] w-[10px] stroke-2 group-active:stroke-white ${
            vote ? `stroke-white` : `stroke-[#4661E6]`
          }`}
        >
          <path d='M1 6l4-4 4 4' fill='none' fillRule='evenodd' />
        </svg>
        <p
          className={`body3 font-bold group-active:text-white ${
            vote ? `text-white` : `text-lightnavy`
          }`}
        >
          {upvoteScore}
        </p>
      </div>
    </div>
  );
}

export default UpvoteH;
