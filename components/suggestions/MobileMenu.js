import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ButtonCategory from "../UI/ButtonCategory";
import ReactDOM from "react-dom";

export default function MobileMenu({ mobMenuOpen, setMobMenuOpen }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = (
    <AnimatePresence>
      {mobMenuOpen ? (
        <motion.div
          initial={{ x: 270, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 270, opacity: 0 }}
          transition={{
            duration: 0.3,
          }}
          className='absolute right-0 top-[72px] z-30 flex h-full w-[270px] flex-col bg-lightgray p-6'
        >
          <section className='flex h-fit w-full flex-wrap gap-x-2 gap-y-[14px] rounded-[10px] bg-white p-6'>
            <ButtonCategory>All</ButtonCategory>
            <ButtonCategory>UI</ButtonCategory>
            <ButtonCategory>UX</ButtonCategory>
            <ButtonCategory>Enhancement</ButtonCategory>
            <ButtonCategory>Bug</ButtonCategory>
            <ButtonCategory>Feature</ButtonCategory>
          </section>

          <section className='mt-6 rounded-[10px] bg-white p-6'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lightnavy'>Roadmap</h3>
              <p className='body3 cursor-pointer text-blue underline'>View</p>
            </div>
            <div className='mt-6 space-y-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='mr-4 h-2 w-2 rounded-full bg-melon' />
                  <p className='text-gray'>Planned</p>
                </div>
                <p className='font-bold text-gray'>2</p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='mr-4 h-2 w-2 rounded-full bg-blue' />
                  <p className='text-gray'>In-Progress</p>
                </div>
                <p className='font-bold text-gray'>3</p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='mr-4 h-2 w-2 rounded-full bg-cyan' />
                  <p className='text-gray'>Live</p>
                </div>
                <p className='font-bold text-gray'>1</p>
              </div>
            </div>
          </section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  const underlayContent = (
    <AnimatePresence>
      {mobMenuOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
          className='fixed top-0 z-20 h-full w-full bg-black opacity-50'
          onClick={() => setMobMenuOpen(false)}
        ></motion.div>
      ) : null}
    </AnimatePresence>
  );

  if (isBrowser) {
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          underlayContent,
          document.getElementById("mobMenu-root")
        )}
        {ReactDOM.createPortal(
          modalContent,
          document.getElementById("mobMenu-root")
        )}
      </React.Fragment>
    );
  } else {
    return null;
  }
}
