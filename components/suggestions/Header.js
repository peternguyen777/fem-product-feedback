import React, { useState } from "react";
import Image from "next/future/image";
import mobileHeader from "../../public/assets/suggestions/mobile/background-header.png";
import { Fade as Hamburger } from "hamburger-react";

function Header({ mobMenuOpen, setMobMenuOpen }) {
  return (
    <header className='sticky top-0 z-[999] flex'>
      <Image
        src={mobileHeader}
        alt=''
        className='absolute h-[72px] w-full object-cover'
      />

      <div className='z-10 ml-6 mr-[10px] flex h-[72px] w-full items-center justify-between'>
        <div>
          <p className='body2 text-white'>Front End Mentor</p>
          <p className='body3 text-white opacity-75'>Feedback Board</p>
        </div>
        <Hamburger
          toggled={mobMenuOpen}
          toggle={setMobMenuOpen}
          size={20}
          direction='left'
          color='#fff'
          distance='lg'
        />
      </div>
    </header>
  );
}

export default Header;
