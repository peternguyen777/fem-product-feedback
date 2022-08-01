import React from "react";
import Link from "next/link";

function ButtonLink1({ children, href }) {
  return (
    <Link href={href || ""}>
      <button className='flex h-10 flex-shrink-0 cursor-pointer items-center rounded-[10px] bg-orchid px-4 transition-colors duration-200 hover:bg-[#C75AF6] md:h-11 md:px-6'>
        <h4 className='mx-auto hidden select-none text-bluegray md:block'>
          {children}
        </h4>
        <p className='body3 mx-auto select-none font-bold text-bluegray md:hidden'>
          {children}
        </p>
      </button>
    </Link>
  );
}

export default ButtonLink1;
