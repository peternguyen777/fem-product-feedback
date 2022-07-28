import React from "react";

function ButtonCategory({ children, setCategorySelect }) {
  return (
    <div
      className='group flex h-[30px] w-fit cursor-pointer select-none items-center rounded-[10px] bg-bluegray px-4 transition-colors duration-200 hover:bg-lightblue active:bg-blue'
      onClick={() => setCategorySelect(children.toLowerCase())}
    >
      <p className='body3 select-none text-blue group-active:text-white'>
        {children}
      </p>
    </div>
  );
}

export default ButtonCategory;
