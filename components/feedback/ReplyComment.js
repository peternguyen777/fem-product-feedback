import React, { useEffect } from "react";
import ButtonSubmit1 from "../UI/ButtonSubmit1";
import { useForm } from "react-hook-form";

function ReplyComment({ setReplyOpen }) {
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
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className='onSubmit mt-6 flex space-x-4 md:ml-[72px]'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='relative w-full'>
        <textarea
          {...register("commentReply", { required: "Can't be empty" })}
          maxLength={250}
          className={`h-[80px] ${
            errors.commentReply && `ring-1 ring-[#D73737] focus:ring-[#D73737]`
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
          {errors.commentReply?.message}
        </h4>
      </div>
      <ButtonSubmit1 submit>Post Reply</ButtonSubmit1>
    </form>
  );
}

export default ReplyComment;
