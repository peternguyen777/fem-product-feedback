import React from "react";
import TagCategory from "./TagCategory";
import { capitalizeFirstLetter } from "../utils/capitalize";
import UpvoteH from "./UpvoteH";
import CommentsCount from "./CommentsCount";

function CardRoadmap({ itemData, filterRoadmap }) {
  return (
    <li className='relative cursor-pointer rounded-[10px] bg-white '>
      <div
        className={`absolute h-[6px] w-full rounded-t-[10px] ${
          filterRoadmap === "Planned"
            ? `bg-melon`
            : filterRoadmap === "In-Progress"
            ? `bg-blue`
            : `bg-cyan`
        }`}
      />
      <div className='p-6 pt-[22px]'>
        <div>
          <div className='flex items-center'>
            <div
              className={`mr-4 h-2 w-2 rounded-full ${
                filterRoadmap === "Planned"
                  ? `bg-melon`
                  : filterRoadmap === "In-Progress"
                  ? `bg-blue`
                  : `bg-cyan`
              } `}
            />
            <p className='body3 text-gray'>{filterRoadmap}</p>
          </div>
        </div>
        <p className='body3 mt-4 font-bold text-lightnavy'>{itemData.title}</p>
        <p className='body3 mb-2 mt-[9px] font-normal text-gray'>
          {itemData.description}
        </p>
        <TagCategory>{capitalizeFirstLetter(itemData.category)}</TagCategory>
        <div className='mt-4 flex items-center justify-between'>
          <UpvoteH upvoteScore={itemData.upvotes} />
          <CommentsCount commentsCount={itemData.comments?.length || 0} />
        </div>
      </div>
    </li>
  );
}

export default CardRoadmap;
