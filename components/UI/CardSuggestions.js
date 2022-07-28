import React from "react";
import ButtonCategory from "./ButtonCategory";
import CommentsCount from "./CommentsCount";
import UpvoteH from "./UpvoteH";

function CardSuggestions({ productData, setCategorySelect, setMobMenuOpen }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='cursor-pointer bg-white p-6'>
      <p className='body3 font-bold text-lightnavy'>{productData.title}</p>
      <p className='body3 my-2 font-normal text-gray'>
        {productData.description}
      </p>

      <ButtonCategory
        setCategorySelect={setCategorySelect}
        setMobMenuOpen={setMobMenuOpen}
      >
        {capitalizeFirstLetter(productData.category)}
      </ButtonCategory>

      <div className='mt-4 flex items-center justify-between'>
        <UpvoteH upvoteScore={productData.upvotes} />
        <CommentsCount commentsCount={productData.comments?.length || 0} />
      </div>
    </div>
  );
}

export default CardSuggestions;
