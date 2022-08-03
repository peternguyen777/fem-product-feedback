import React, { useEffect } from "react";
import ButtonSubmit1 from "../UI/ButtonSubmit1";
import { useForm } from "react-hook-form";

import { useMutation } from "@apollo/client";
import { REPLY_TO_COMMENT } from "../../graphql/mutations";
import { GET_FEEDBACK_BY_ID } from "../../graphql/queries";
import { toast } from "react-hot-toast";

function ReplyComment({ setReplyOpen, replyingTo, userReplyingTo, item }) {
  const [insertReplyToComment] = useMutation(REPLY_TO_COMMENT, {
    refetchQueries: [GET_FEEDBACK_BY_ID, "getFeedback"],
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setReplyOpen(false);
    }
  }, [isSubmitSuccessful, setReplyOpen, reset]);

  const onSubmit = async (data) => {
    const notification = toast.loading("Posting your reply...");
    if (replyingTo === "reply") {
      data.replyToReply = `@${userReplyingTo} ` + data.replyToReply;
    }
    if (replyingTo === "comment") {
      data.replyToComment = `@${userReplyingTo} ` + data.replyToComment;
    }
    await insertReplyToComment({
      variables: {
        content: data.replyToComment || data.replyToReply,
        user_id: "11",
        comment_id: item.id,
        feedback_id: item.feedback_id,
      },
    });
    toast.success("Reply successfully posted!", { id: notification });
    console.log(data);
  };

  return (
    <form
      className='mt-6 flex flex-col items-end space-y-4 md:ml-[72px] md:flex-row md:items-start md:space-y-0 md:space-x-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='relative w-full'>
        <textarea
          {...register(
            `${replyingTo === "comment" ? `replyToComment` : `replyToReply`}`,
            { required: "Can't be empty" }
          )}
          maxLength={250}
          className={`h-[80px] ${
            (errors.replyToComment || errors.replyToReply) &&
            `ring-1 ring-[#D73737] focus:ring-[#D73737]`
          }`}
          autoFocus
          onFocus={(e) =>
            e.currentTarget.setSelectionRange(
              e.currentTarget.value.length,
              e.currentTarget.value.length
            )
          }
        />
        <h4 className='absolute -bottom-1 translate-y-full font-normal text-[#D73737]'>
          {errors.replyToComment?.message}
          {errors.replyToReply?.message}
        </h4>
      </div>
      <ButtonSubmit1 submit>Post Reply</ButtonSubmit1>
    </form>
  );
}

export default ReplyComment;
