import React, { useEffect } from "react";
import ButtonSubmit1 from "../../components/UI/ButtonSubmit1";
import { useForm, useWatch } from "react-hook-form";

import { useMutation, useQuery } from "@apollo/client";
import { GET_FEEDBACK_BY_ID } from "../../graphql/queries";
import { ADD_COMMENT } from "../../graphql/mutations";
import { toast } from "react-hot-toast";

function AddComment({ productData }) {
  const [insertComments] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_FEEDBACK_BY_ID, "getFeedback"],
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ mode: "all" });

  const addComment = useWatch({
    control,
    name: "addcomment",
  });

  const charsRemaining = 250 - addComment?.length || 250;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data) => {
    const notification = toast.loading("Posting your comment...");
    await insertComments({
      variables: {
        content: data.addcomment,
        feedback_id: productData.id,
        user_id: "11",
      },
    });
    toast.success("Comment successfully posted!", { id: notification });
  };

  return (
    <form
      className='mt-6 rounded-[10px] bg-white p-6'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='mb-6 flex items-center justify-between'>
        <h3 className=' text-lightnavy'>Add Comment</h3>
        <p className='body3 cursor-pointer text-right font-normal text-lightnavy'>
          @velvetround
        </p>
      </div>
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
