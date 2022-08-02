import React from "react";
import Link from "next/link";
import TagCategory from "./TagCategory";
import CommentsCount from "./CommentsCount";
import UpvoteH from "./UpvoteH";
import UpvoteV from "./UpvoteV";
import { capitalizeFirstLetter } from "../utils/capitalize";

function CardSuggestions({ productData, setCategorySelect, setMobMenuOpen }) {
  return (
    <div className='rounded-[10px] bg-white p-6 md:flex md:items-center md:justify-between md:px-8 md:py-[28px]'>
      <div className='flex items-start'>
        <UpvoteV upvoteScore={productData.upvotes} />
        <div className='md:ml-10'>
          <Link href={`/feedback/${productData.id}`}>
            <p className='body3 cursor-pointer font-bold text-lightnavy hover:text-blue md:hidden'>
              {productData.title}
            </p>
          </Link>
          <Link href={`/feedback/${productData.id}`}>
            <h3 className='hidden cursor-pointer text-lightnavy hover:text-blue md:block'>
              {productData.title}
            </h3>
          </Link>
          <p className='body3 md:body1 my-2 font-normal text-gray md:mt-1 md:mb-3'>
            {productData.description}
          </p>

          <TagCategory>
            {capitalizeFirstLetter(productData.category)}
          </TagCategory>
        </div>
      </div>

      <div className='mt-4 flex items-center justify-between md:mt-0'>
        <div className='md:hidden'>
          <UpvoteH upvoteScore={productData.upvotes} />
        </div>
        <CommentsCount commentsCount={productData.comments?.length || 0} />
      </div>
    </div>
  );
}

export default CardSuggestions;
