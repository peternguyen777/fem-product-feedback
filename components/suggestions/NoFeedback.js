import React from "react";
import Image from "next/image";
import illustrationEmpty from "../../public/assets/suggestions/illustration-empty.svg";
import Button1 from "../UI/Button1";

function NoFeedback() {
  return (
    <div className='flex flex-col items-center rounded-[10px] bg-white px-6 py-[76px]'>
      <Image src={illustrationEmpty} alt='' />
      <h3 className='mt-10 text-lightnavy'>There is no feedback yet.</h3>
      <p className='body3 mt-[14px] mb-6 font-normal text-gray'>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Button1>+ Add Feedback</Button1>
    </div>
  );
}

export default NoFeedback;
