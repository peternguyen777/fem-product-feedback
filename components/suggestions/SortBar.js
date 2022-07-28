import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Button1 from "../UI/Button1";

function SortBar({
  filterMenuOpen,
  setFilterMenuOpen,
  filterSelect,
  setFilterSelect,
}) {
  const tick = (
    <svg xmlns='http://www.w3.org/2000/svg' width='13' height='11'>
      <path
        fill='none'
        stroke='#AD1FEA'
        strokeWidth='2'
        d='M1 5.233L4.522 9 12 1'
      />
    </svg>
  );

  return (
    <div className='sticky top-[72px] flex w-full items-center bg-navy px-6'>
      <div className='flex h-14 w-full items-center justify-between'>
        <div
          className='flex cursor-pointer select-none items-center'
          onClick={() => {
            setFilterMenuOpen(!filterMenuOpen);
          }}
        >
          <p className='body3 mr-2 font-normal text-white'>
            Sort by: <span className='font-bold'>{filterSelect}</span>
          </p>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-[7px] w-[10px]'>
            <path
              d='M1 1l4 4 4-4'
              stroke='#fff'
              strokeWidth='2'
              // fill='none'
              // fillRule='evenodd'
            />
          </svg>
        </div>

        <Button1>+ Add Feedback</Button1>
      </div>

      <AnimatePresence>
        {filterMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.1,
            }}
            className='absolute top-[72px]
         w-[255px] rounded-[10px] bg-white shadow-lg'
          >
            <div
              className='mx-6 flex cursor-pointer items-center justify-between'
              onClick={() => {
                setFilterSelect("Most Upvotes");
                setFilterMenuOpen(false);
              }}
            >
              <p className='body1 my-3 text-gray hover:text-orchid'>
                Most Upvotes
              </p>
              {filterSelect === "Most Upvotes" && tick}
            </div>
            <hr className='text-lightnavy opacity-[.15]' />
            <div
              className='mx-6 flex cursor-pointer items-center justify-between'
              onClick={() => {
                setFilterSelect("Least Upvotes");
                setFilterMenuOpen(false);
              }}
            >
              <p className='body1 my-3 text-gray hover:text-orchid'>
                Least Upvotes
              </p>
              {filterSelect === "Least Upvotes" && tick}
            </div>
            <hr className='text-lightnavy opacity-[.15]' />
            <div
              className='mx-6 flex cursor-pointer items-center justify-between'
              onClick={() => {
                setFilterSelect("Most Comments");
                setFilterMenuOpen(false);
              }}
            >
              <p className='body1 my-3 text-gray hover:text-orchid'>
                Most Comments
              </p>
              {filterSelect === "Most Comments" && tick}
            </div>
            <hr className='text-lightnavy opacity-[.15]' />
            <div
              className='mx-6 flex cursor-pointer items-center justify-between'
              onClick={() => {
                setFilterSelect("Least Comments");
                setFilterMenuOpen(false);
              }}
            >
              <p className='body1 my-3 text-gray hover:text-orchid'>
                Least Comments
              </p>
              {filterSelect === "Least Comments" && tick}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SortBar;
