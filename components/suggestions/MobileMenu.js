import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import ButtonCategory from "../UI/ButtonCategory";
import ReactDOM from "react-dom";

export default function MobileMenu({
  mobMenuOpen,
  setMobMenuOpen,
  categorySelect,
  setCategorySelect,
  roadmapCount,
}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = (
    <>
      <div
        className={`fixed right-0 top-[72px] z-30 h-full w-[270px] select-none bg-lightgray p-6 md:hidden ${
          mobMenuOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out`}
      >
        <section className='flex h-fit w-full flex-wrap gap-x-2 gap-y-[14px] rounded-[10px] bg-white p-6'>
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
        </section>

        <section className='mt-6 rounded-[10px] bg-white p-6'>
          <div className='flex items-center justify-between'>
            <h3 className='text-lightnavy'>Roadmap</h3>
            <Link href='/roadmap/'>
              <p className='body3 cursor-pointer text-blue underline'>View</p>
            </Link>
          </div>
          <div className='mt-6 space-y-2'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='mr-4 h-2 w-2 rounded-full bg-melon' />
                <p className='body1 text-gray'>Planned</p>
              </div>
              <p className='body1 font-bold text-gray'>
                {roadmapCount?.countPlanned}
              </p>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='mr-4 h-2 w-2 rounded-full bg-blue' />
                <p className='body1 text-gray'>In-Progress</p>
              </div>
              <p className='body1 font-bold text-gray'>
                {roadmapCount?.countProgress}
              </p>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='mr-4 h-2 w-2 rounded-full bg-cyan' />
                <p className='body1 text-gray'>Live</p>
              </div>
              <p className='body1 font-bold text-gray'>
                {roadmapCount?.countLive}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
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
          className='fixed top-0 z-20 h-full w-full bg-black opacity-50 md:hidden'
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
