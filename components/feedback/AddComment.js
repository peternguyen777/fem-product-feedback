import React from "react";
import ButtonSubmit1 from "../../components/UI/ButtonSubmit1";
import { useForm, useWatch } from "react-hook-form";

function AddComment() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  const addComment = useWatch({
    control,
    name: "addcomment",
  });

  const charsRemaining = 250 - addComment?.length || 250;

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className='mt-6 rounded-[10px] bg-white p-6'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className='mb-6 text-lightnavy'>Add Comment</h3>
      <div className='relative'>
        <textarea
          maxLength='250'
          placeholder='Type your comment here'
          {...register("addcomment", { required: "Can't be empty" })}
          className={`h-20 p-4 text-[13px] leading-[19px] ${
            errors.addcomment && `ring-1 ring-[#D73737] focus:ring-[#D73737]`
          }`}
        />
        <h4 className='absolute -bottom-1 translate-y-full font-normal text-[#D73737]'>
          {errors.addcomment?.message}
        </h4>
      </div>
      <div className='mt-4 flex items-center justify-between'>
        <p className='body3 font-normal text-gray'>
          {charsRemaining} Characters left
        </p>
        <ButtonSubmit1 submit>Post Comment</ButtonSubmit1>
      </div>
    </form>
  );
}

export default AddComment;
