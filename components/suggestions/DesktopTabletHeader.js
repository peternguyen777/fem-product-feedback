import React from "react";
import Image from "next/future/image";
import Link from "next/link";
import ButtonCategory from "../UI/ButtonCategory";
import tabletHeader from "../../public/assets/suggestions/tablet/background-header.png";
import desktopHeader from "../../public/assets/suggestions/desktop/background-header.png";

function DesktopTabletHeader({
  categorySelect,
  setCategorySelect,
  setMobMenuOpen,
}) {
  return (
    <header className='mx-10 mt-14 hidden grid-cols-3 gap-x-[10px] md:grid lg:mx-0 lg:mt-0 lg:mr-10 lg:flex lg:w-[255px] lg:flex-col lg:space-y-4'>
      <section className='relative rounded-[10px] lg:h-[137px]'>
        <Image
          src={tabletHeader}
          alt=''
          className='absolute z-10 h-full w-full rounded-[10px] object-cover lg:hidden'
        />
        <Image
          src={desktopHeader}
          alt=''
          className='absolute z-10 hidden h-full w-full rounded-[10px] object-cover lg:inline-block'
        />
        <Link href='/'>
          <div className='absolute left-6 bottom-6 z-10 cursor-pointer select-none'>
            <h2 className='text-white'>Frontend Mentor</h2>
            <p className='body2 text-white opacity-75'>Feedback Board</p>
          </div>
        </Link>
      </section>
      <section className='rounded-[10px] bg-white p-6'>
        <div className='flex flex-wrap gap-x-2 gap-y-[14px] bg-transparent'>
          <ButtonCategory
            setCategorySelect={setCategorySelect}
            setMobMenuOpen={setMobMenuOpen}
            categorySelect={categorySelect}
          >
            All
          </ButtonCategory>
          <ButtonCategory
            setCategorySelect={setCategorySelect}
            setMobMenuOpen={setMobMenuOpen}
            categorySelect={categorySelect}
          >
            UI
          </ButtonCategory>
          <ButtonCategory
            setCategorySelect={setCategorySelect}
            setMobMenuOpen={setMobMenuOpen}
            categorySelect={categorySelect}
          >
            UX
          </ButtonCategory>
          <ButtonCategory
            setCategorySelect={setCategorySelect}
            setMobMenuOpen={setMobMenuOpen}
            categorySelect={categorySelect}
          >
            Enhancement
          </ButtonCategory>
          <ButtonCategory
            setCategorySelect={setCategorySelect}
            setMobMenuOpen={setMobMenuOpen}
            categorySelect={categorySelect}
          >
            Bug
          </ButtonCategory>
          <ButtonCategory
            setCategorySelect={setCategorySelect}
            setMobMenuOpen={setMobMenuOpen}
            categorySelect={categorySelect}
          >
            Feature
          </ButtonCategory>
        </div>
      </section>
      <section className='rounded-[10px] bg-white'>
        <div className='flex h-full flex-col justify-between px-6 pb-6 pt-[19px]'>
          <div className='flex items-center justify-between'>
            <h3 className='text-lightnavy'>Roadmap</h3>
            <Link href='/roadmap/'>
              <p className='body3 cursor-pointer text-blue underline'>View</p>
            </Link>
          </div>
          <div className='space-y-2 md:mt-0 lg:mt-6'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='mr-4 h-2 w-2 rounded-full bg-melon' />
                <p className='body1 text-gray'>Planned</p>
              </div>
              <p className='body1 font-bold text-gray'>2</p>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='mr-4 h-2 w-2 rounded-full bg-blue' />
                <p className='body1 text-gray'>In-Progress</p>
              </div>
              <p className='body1 font-bold text-gray'>3</p>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='mr-4 h-2 w-2 rounded-full bg-cyan' />
                <p className='body1 text-gray'>Live</p>
              </div>
              <p className='body1 font-bold text-gray'>1</p>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default DesktopTabletHeader;
