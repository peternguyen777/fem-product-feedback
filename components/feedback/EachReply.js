import React, { useState } from "react";
import Image from "next/future/image";
import ReplyComment from "./ReplyComment";

function EachReply({ reply, replies }) {
  const [replyOpen, setReplyOpen] = useState(false);
  const [replyingTo, setReplyingTo] = useState("");

  const newPathReplyUser = reply.user.image.slice(1);
  return (
    <div className='vert-hr-last relative mt-6 pl-6 md:mt-4 md:first:mt-8 lg:mt-8'>
      <div
        className={`${
          replies.length > 1
            ? `vert-hr-last-hidden`
            : replyOpen
            ? `vert-hr-last-mobile-comment`
            : `vert-hr-last-mobile`
        }  absolute -left-0 top-0 h-[calc(100%+44px)] w-1 border-l border-[#8C92B3] border-opacity-25 md:top-[20px] md:h-[calc(100%+20px)] lg:h-[calc(100%+32px)]`}
      />
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image
            src={newPathReplyUser}
            alt=''
            className='rounded-full'
            width={40}
            height={40}
          />
          <div className='ml-4 md:ml-8'>
            <p className='body3 text-navy md:hidden'>{reply.user.name}</p>
            <h4 className='hidden text-navy md:block'>{reply.user.name}</h4>
            <p className='body3 font-normal text-gray md:hidden'>
              @{reply.user.username}
            </p>
            <h4 className='hidden font-normal text-gray md:block'>
              @{reply.user.username}
            </h4>
          </div>
        </div>
        <p
          className='body3 cursor-pointer text-blue'
          onClick={() => {
            setReplyOpen(!replyOpen);
            setReplyingTo("reply");
          }}
        >
          Reply
        </p>
      </div>
      <p className='body3 md:body2 mt-4 font-normal text-gray md:pl-[72px]'>
        <span className='cursor-pointer font-bold text-blue'>
          @{reply.replyingTo}{" "}
        </span>
        {reply.content}
      </p>
      {replyOpen && (
        <ReplyComment
          setReplyOpen={setReplyOpen}
          replyingTo={replyingTo}
          userReplyingTo={reply.user.username}
        />
      )}
    </div>
  );
}

export default EachReply;
