import React from "react";
import EachComment from "./EachComment";

function Comments({ productData }) {
  var commentsLength = productData.comments?.length || 0;
  productData.comments?.map((item) => {
    commentsLength += item.replies?.length || 0;
  });

  return (
    <div className='mt-6 rounded-[10px] bg-white p-8 pt-6'>
      <h3 className='mb-6 text-lightnavy'>{commentsLength} Comments</h3>
      {productData.comments?.map((item) => (
        <EachComment item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Comments;
