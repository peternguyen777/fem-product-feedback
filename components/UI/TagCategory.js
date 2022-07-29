import React from "react";

function TagCategory({ children }) {
  return (
    <div className='flex h-[30px] w-fit cursor-pointer select-none items-center rounded-[10px] bg-bluegray px-4'>
      <p className='body3 select-none text-blue'>{children}</p>
    </div>
  );
}

export default TagCategory;
