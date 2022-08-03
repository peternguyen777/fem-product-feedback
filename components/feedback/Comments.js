import React from "react";
import EachComment from "./EachComment";

function Comments({ productData }) {
  var commentsLength = productData?.commentsList?.length || 0;
  productData?.commentsList?.map((item) => {
    commentsLength += item.replyToCommentList?.length || 0;
  });

  return (
    <div className='mt-6 rounded-[10px] bg-white p-8 pt-6'>
      <h3 className='mb-6 text-lightnavy'>{commentsLength} Comments</h3>
      {productData?.commentsList?.map((item, i) => (
        <EachComment item={item} key={i} />
      ))}
    </div>
  );
}

export default Comments;
