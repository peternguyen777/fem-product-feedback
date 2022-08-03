import React from "react";

function UpvoteV({ upvoteScore, vote, onClick }) {
  return (
    <div
      className={`group hidden w-10 cursor-pointer select-none items-center rounded-[10px] pt-[14px] pb-2 active:bg-blue md:inline-flex ${
        vote ? `bg-blue` : `bg-bluegray hover:bg-[#CFD7FF]`
      }`}
      onClick={onClick}
    >
      <div className='mx-auto flex flex-col items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`mb-2 h-[7px] w-[10px]  stroke-2 group-active:stroke-white ${
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

export default UpvoteV;
