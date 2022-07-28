import React from "react";
import Link from "next/link";

function Button1({ children, href }) {
  return (
    <Link href={href || ""}>
      <div className='flex h-10 w-fit cursor-pointer items-center rounded-[10px] bg-[#D73737] px-4 transition-colors duration-200 hover:bg-[#E98888] sm:h-11 sm:px-6'>
        <h4 className='hidden select-none text-bluegray sm:block'>
          {children}
        </h4>
        <p className='body3 select-none font-bold text-bluegray sm:hidden'>
          {children}
        </p>
      </div>
    </Link>
  );
}

export default Button1;
