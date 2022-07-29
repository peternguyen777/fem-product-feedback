import React from "react";
import Link from "next/link";
import Image from "next/future/image";
import mobileHeader from "../../public/assets/suggestions/mobile/background-header.png";
import { Squash as Hamburger } from "hamburger-react";

function MobileHeader({ mobMenuOpen, setMobMenuOpen }) {
  return (
    <header className='sticky top-0 z-[999] flex w-full md:hidden'>
      <Image
        src={mobileHeader}
        alt=''
        className='absolute h-[72px] w-full object-cover'
      />

      <div className='z-10 ml-6 mr-[10px] flex h-[72px] w-full items-center justify-between'>
        <Link href='/'>
          <div className='cursor-pointer select-none'>
            <p className='body2 text-white'>Front End Mentor</p>
            <p className='body3 text-white opacity-75'>Feedback Board</p>
          </div>
        </Link>
        <Hamburger
          toggled={mobMenuOpen}
          toggle={setMobMenuOpen}
          size={20}
          color='#fff'
          distance='lg'
          duration={0.3}
        />
      </div>
    </header>
  );
}

export default MobileHeader;
