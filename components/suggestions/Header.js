import React, { useState } from "react";
import Link from "next/link";
import Image from "next/future/image";
import mobileHeader from "../../public/assets/suggestions/mobile/background-header.png";
import { Squash as Hamburger } from "hamburger-react";

function Header({ mobMenuOpen, setMobMenuOpen }) {
  return (
    <header className='sticky top-0 z-[999] flex'>
      <Image
        src={mobileHeader}
        alt=''
        className='absolute h-[72px] w-full object-cover'
      />

      <div className='z-10 ml-6 mr-[10px] flex h-[72px] w-full select-none items-center justify-between'>
        <div>
          <Link href='/'>
            <p className='body2 cursor-pointer text-white'>Front End Mentor</p>
          </Link>
          <p className='body3 text-white opacity-75'>Feedback Board</p>
        </div>
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

export default Header;
