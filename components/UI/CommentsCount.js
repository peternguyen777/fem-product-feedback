import React from "react";

function CommentsCount({ commentsCount }) {
  return (
    <div className='flex items-center space-x-1'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-[18px] fill-current text-[#CDD2EE]'
      >
        <path
          d='M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z'
          fillRule='nonzero'
        />
      </svg>
      <p className='body1 font-bold text-lightnavy group-active:text-white'>
        {commentsCount}
      </p>
    </div>
  );
}

export default CommentsCount;
