import React from "react";
import Image from "next/future/image";
import illustrationEmpty from "../../public/assets/suggestions/illustration-empty.svg";
import Button1 from "../UI/Button1";

function NoFeedback() {
  return (
    <div className='flex flex-col items-center rounded-[10px] bg-white px-6 py-[76px] md:py-[110px] md:px-[140px]'>
      <Image
        src={illustrationEmpty}
        alt=''
        className='md:h-[139px] md:w-auto'
      />
      <div className='mt-10 text-lightnavy md:mt-[52px]'>
        <h3 className='md:hidden'>There is no feedback yet.</h3>
        <h1 className='hidden md:block'>There is no feedback yet.</h1>
      </div>
      <p className='body3 md:body1 mt-[14px] mb-6 text-center font-normal text-gray md:mb-12 md:mt-4'>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Button1 href='/feedback/new/'>+ Add Feedback</Button1>
    </div>
  );
}

export default NoFeedback;
