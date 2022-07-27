import React from "react";

function ButtonCategory({ children }) {
  return (
    <div className='flex h-[30px] w-fit cursor-pointer items-center rounded-[10px] bg-bluegray px-4 transition-colors duration-200 hover:bg-lightblue active:bg-blue'>
      <p className='body3 text-blue active:text-white'> {children}</p>
    </div>
  );
}

export default ButtonCategory;
