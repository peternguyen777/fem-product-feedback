import React, { useState } from "react";
import Image from "next/future/image";
import ReplyComment from "./ReplyComment";
import EachReply from "./EachReply";

function EachComment({ item }) {
  const [replyOpen, setReplyOpen] = useState(false);
  const [replyingTo, setReplyingTo] = useState("");
  const newPath = item.user.image.slice(1);

  return (
    <div
      key={item.id}
      className='relative mb-6 border-b border-[#8C92B3] border-opacity-25 pb-6 last:mb-0 last:border-none last:pb-0 md:mb-8 md:pb-8'
    >
      <div className='flex items-center justify-between '>
        <div className='flex items-center'>
          <Image
            src={newPath}
            alt=''
            className='rounded-full'
            width={40}
            height={40}
          />
          <div className='ml-4 md:ml-8'>
            <p className='body3 text-navy md:hidden'>{item.user.name}</p>
            <h4 className='hidden text-navy md:block'>{item.user.name}</h4>
            <p className='body3 font-normal text-gray md:hidden'>
              @{item.user.username}
            </p>
            <h4 className='hidden font-normal text-gray md:block'>
              @{item.user.username}
            </h4>
          </div>
        </div>
        <p
          className='body3 cursor-pointer text-blue'
          onClick={() => {
            setReplyOpen(!replyOpen);
            setReplyingTo("comment");
          }}
        >
          Reply
        </p>
      </div>

      <p className='body3 md:body2 relative mt-4 font-normal text-gray md:ml-[72px]'>
        {item.content}
        {item.replies && (
          <div
            className={`absolute w-1 border-l border-[#8C92B3] border-opacity-25 md:-left-[52px] md:top-0 ${
              replyOpen ? `md:h-[calc(100%+156px)]` : `md:h-[calc(100%+52px)]`
            }`}
          />
        )}
      </p>

      {replyOpen && (
        <ReplyComment
          setReplyOpen={setReplyOpen}
          replyingTo={replyingTo}
          userReplyingTo={item.user.username}
        />
      )}

      <div className='md:ml-5'>
        {item?.replies?.map((reply, i, replies) => (
          <EachReply reply={reply} key={i} replies={replies} />
        ))}
      </div>
    </div>
  );
}

export default EachComment;
