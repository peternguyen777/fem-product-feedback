import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Button1 from "../UI/Button1";

function SortBar({
  filterMenuOpen,
  setFilterMenuOpen,
  filterSelect,
  setFilterSelect,
  sortedRequests,
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
    <div className='sticky top-[72px] flex items-center bg-navy px-6 md:relative md:top-0 md:mx-10 md:mt-10 md:rounded-[10px] md:pl-6 md:pr-3 lg:m-0 lg:flex-1'>
      <div className='flex h-14 w-full items-center justify-between md:h-[72px]'>
        <div className='flex cursor-pointer select-none items-center'>
          <div className='hidden md:mr-[38px] md:inline-flex md:w-[156px] md:items-center md:justify-between'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-[24px] w-[23px] fill-current text-white '
            >
              <path
                d='M11.5 2.274c2.237 0 4.339.854 5.923 2.408a8.123 8.123 0 012.465 5.839 8.084 8.084 0 01-1.7 4.979 8.457 8.457 0 01-3.652 2.71l-.31.112.003.826h.369c.262 0 .475.21.475.469a.47.47 0 01-.39.46l-.085.008h-.365l.004 1.02h.36c.263 0 .476.21.476.469a.47.47 0 01-.39.461l-.085.008h-.358l.006 1.487a.466.466 0 01-.381.46l-.094.01H9.23a.478.478 0 01-.466-.378l-.01-.092.006-1.487h-.357a.472.472 0 01-.475-.47.47.47 0 01.39-.46l.085-.008h.361l.004-1.02h-.365a.472.472 0 01-.475-.468.47.47 0 01.39-.462l.085-.007h.368l.004-.826a8.452 8.452 0 01-3.996-2.867 8.08 8.08 0 01-1.666-5.056c.032-2.127.923-4.152 2.511-5.7 1.508-1.471 3.448-2.322 5.493-2.416l.324-.009h.06zm1.791 19.769H9.709l-.004 1.02h3.59l-.004-1.02zm-.007-1.958H9.716l-.003 1.02h3.574l-.003-1.02zM11.5 3.212h-.054c-3.946.027-7.327 3.325-7.384 7.2-.048 3.266 2.14 6.192 5.322 7.118.174.05.3.193.332.364l.008.088-.004 1.166h3.56l-.004-1.166a.47.47 0 01.34-.452c3.134-.912 5.323-3.794 5.323-7.01a7.197 7.197 0 00-2.185-5.173A7.453 7.453 0 0011.5 3.212zm.829 1.782a.4.4 0 01.401.397v.322c.48.12.932.307 1.346.552l.228-.226a.405.405 0 01.569 0L16.046 7.2a.393.393 0 010 .56l-.23.228c.247.41.437.858.557 1.333h.323a.4.4 0 01.402.397v1.645a.4.4 0 01-.402.396h-.323c-.12.476-.31.924-.557 1.333l.23.228a.393.393 0 010 .56l-1.173 1.163a.405.405 0 01-.57 0l-.227-.227a5.02 5.02 0 01-1.346.553v.322a.4.4 0 01-.401.396H10.67a.4.4 0 01-.402-.396v-.322a5.022 5.022 0 01-1.345-.553l-.228.227a.405.405 0 01-.569 0L6.954 13.88a.393.393 0 010-.56l.23-.228a4.924 4.924 0 01-.557-1.333h-.324a.4.4 0 01-.401-.396V9.719a.4.4 0 01.401-.397h.324c.12-.475.31-.923.557-1.333l-.23-.228a.393.393 0 010-.56L8.127 6.04a.405.405 0 01.569 0l.228.226a5.021 5.021 0 011.345-.552V5.39a.4.4 0 01.402-.397zM11.5 7.721c-1.572 0-2.846 1.263-2.846 2.82 0 1.558 1.274 2.82 2.846 2.82s2.846-1.262 2.846-2.82c0-1.557-1.274-2.82-2.846-2.82zm11.025 4.152c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008h-.498a.472.472 0 01-.475-.469.47.47 0 01.39-.461l.085-.008h.498zm-21.552 0c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008H.475A.472.472 0 010 12.342a.47.47 0 01.39-.461l.085-.008h.498zM3.112 3.45l.074.06.46.451c.185.183.186.48 0 .663a.476.476 0 01-.596.062l-.075-.06-.459-.451a.465.465 0 01-.001-.663.48.48 0 01.597-.062zm17.373.062c.162.16.182.408.06.59l-.061.073-.46.45a.476.476 0 01-.67 0 .464.464 0 01-.06-.59l.06-.074.46-.45a.48.48 0 01.671 0zM11.5 0c.233 0 .427.166.467.384l.008.085v.49a.472.472 0 01-.475.468.473.473 0 01-.467-.384l-.008-.084v-.49c0-.26.213-.469.475-.469z'
                fillRule='nonzero'
              />
            </svg>
            <h3 className='md:text-white'>
              {sortedRequests?.length} Suggestions
            </h3>
          </div>
          <div
            className='flex items-center hover:opacity-75 md:pt-[2px]'
            onClick={() => {
              setFilterMenuOpen(!filterMenuOpen);
            }}
          >
            <p className='body3 mr-2 font-normal text-white md:hidden'>
              Sort by: <span className='font-bold'>{filterSelect}</span>
            </p>
            <h4
              className='mr-2 hidden flex-shrink-0 font-normal text-white md:block'
              onClick={() => {
                setFilterMenuOpen(!filterMenuOpen);
              }}
            >
              Sort by: <span className=' font-bold'>{filterSelect}</span>
            </h4>
            {filterMenuOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-[7px] w-[10px]'
              >
                <path d='M1 6l4-4 4 4' stroke='#fff' strokeWidth='2' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-[7px] w-[10px]'
              >
                <path d='M1 1l4 4 4-4' stroke='#fff' strokeWidth='2' />
              </svg>
            )}
          </div>
        </div>

        <Button1 href='/feedback/new/'>+ Add Feedback</Button1>
      </div>

      <AnimatePresence>
        {filterMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
            className='absolute top-[72px]
         w-[255px] rounded-[10px] bg-white shadow-xl md:top-[88px] md:left-[218px]'
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
