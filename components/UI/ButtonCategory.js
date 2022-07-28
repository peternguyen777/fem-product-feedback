import React from "react";
import Link from "next/link";

function ButtonCategory({ children, href }) {
  return (
    <Link href={href || ""}>
      <div className='group flex h-[30px] w-fit cursor-pointer select-none items-center rounded-[10px] bg-bluegray px-4 transition-colors duration-200 hover:bg-lightblue active:bg-blue'>
        <p className='body3 select-none text-blue group-active:text-white'>
          {children}
        </p>
      </div>
    </Link>
  );
}

export default ButtonCategory;
