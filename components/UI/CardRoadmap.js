import React from "react";
import TagCategory from "./TagCategory";
import { capitalizeFirstLetter } from "../utils/capitalize";
import UpvoteH from "./UpvoteH";
import CommentsCount from "./CommentsCount";

function CardRoadmap({ itemData, filterRoadmap }) {
  return (
    <li
      className={`relative cursor-pointer rounded-[10px] bg-white ${
        filterRoadmap === "Planned"
          ? `planned`
          : filterRoadmap === "In-Progress"
          ? `progress`
          : `live`
      }`}
    >
      <div
        className={`absolute h-[6px] w-full rounded-t-[10px] ${
          filterRoadmap === "Planned"
            ? `bg-melon`
            : filterRoadmap === "In-Progress"
            ? `bg-blue`
            : `bg-cyan`
        }`}
      />
      <div className='p-6 pt-[22px] md:flex md:h-full md:min-h-[251px] md:flex-col md:justify-between md:pt-[26px] lg:min-h-[272px] lg:p-8'>
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
          <p className='body3 mt-4 font-bold text-lightnavy md:mt-[14px] lg:hidden'>
            {itemData.title}
          </p>
          <h3 className='mt-2 hidden font-bold text-lightnavy hover:text-blue lg:block'>
            {itemData.title}
          </h3>
          <p className='body3 lg:body1 mb-2 mt-[9px] font-normal text-gray md:mb-6 lg:mt-1 lg:mb-4'>
            {itemData.description}
          </p>
        </div>

        <div>
          <TagCategory>{capitalizeFirstLetter(itemData.category)}</TagCategory>
          <div className='mt-4 flex items-center justify-between'>
            <UpvoteH upvoteScore={itemData.upvotes} />
            <CommentsCount commentsCount={itemData.comments?.length || 0} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default CardRoadmap;
