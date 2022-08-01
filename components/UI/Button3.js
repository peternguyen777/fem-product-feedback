import React from "react";
import Link from "next/link";

function Button3({ children, href, full }) {
  return (
    <Link href={href || ""}>
      <div
        className={`${
          full ? `w-full` : `w-fit`
        } flex h-10  cursor-pointer items-center rounded-[10px] bg-lightnavy px-4 transition-colors duration-200 hover:bg-[#656EA3] md:h-11 md:px-6`}
      >
        <h4 className='mx-auto hidden select-none text-bluegray md:block'>
          {children}
        </h4>
        <p className='body3 mx-auto select-none font-bold text-bluegray md:hidden'>
          {children}
        </p>
      </div>
    </Link>
  );
}

export default Button3;
