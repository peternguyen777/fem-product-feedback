import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ButtonSubmit1 from "../../../components/UI/ButtonSubmit1";
import Button3 from "../../../components/UI/Button3";
import Button4 from "../../../components/UI/Button4";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import { toast } from "react-hot-toast";
import Custom404 from "../../404";
import Header from "../../../components/feedback/edit/Header";

//graphQL
import { useQuery, useMutation } from "@apollo/client";
import { GET_FEEDBACK_BY_ID, GET_ALL_FEEDBACK } from "../../../graphql/queries";
import {
  DELETE_ALL_VOTES_BY_FEEDBACK_ID,
  DELETE_ALL_REPLIES_BY_FEEDBACK_ID,
  DELETE_ALL_COMMENTS_BY_FEEDBACK_ID,
  DELETE_FEEDBACK_BY_ID,
  UPDATE_FEEDBACK,
} from "../../../graphql/mutations";

function EditFeedback() {
  const router = useRouter();

  const { data, error, loading } = useQuery(GET_FEEDBACK_BY_ID, {
    variables: {
      id: router.query.editId,
    },
  });

  const editData = data?.getFeedback;

  const [deleteAllVotesByFeedbackId] = useMutation(
    DELETE_ALL_VOTES_BY_FEEDBACK_ID
  );
  const [deleteAllReplyToCommentsByFeedbackId] = useMutation(
    DELETE_ALL_REPLIES_BY_FEEDBACK_ID
  );
  const [deleteAllCommentsByFeedbackId] = useMutation(
    DELETE_ALL_COMMENTS_BY_FEEDBACK_ID
  );
  const [deleteFeedback] = useMutation(DELETE_FEEDBACK_BY_ID, {
    refetchQueries: [GET_ALL_FEEDBACK, "getFeedbackList"],
  });

  const [updateFeedback] = useMutation(UPDATE_FEEDBACK, {
    refetchQueries: [GET_FEEDBACK_BY_ID, "getFeedback"],
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "all" });

  useEffect(() => {
    setValue("title", editData?.title);
    setValue("category", editData?.category);
    setValue("status", editData?.status);
    setValue("detail", editData?.description);
  }, [data]);

  const onSubmit = async (data) => {
    const notification = toast.loading("Updating feedback...");

    await updateFeedback({
      variables: {
        feedback_id: router.query.editId,
        description: data.detail,
        category: data.category,
        title: data.title,
        status: data.status,
      },
    });

    toast.success("Feedback successfully updated!", { id: notification });

    router.back();
  };

  const deleteFeedbackHandler = async () => {
    const notification = toast.loading("Deleting feedback...");

    await deleteAllVotesByFeedbackId({
      variables: {
        feedback_id: editData.id,
      },
    });

    await deleteAllReplyToCommentsByFeedbackId({
      variables: {
        feedback_id: editData.id,
      },
    });

    await deleteAllCommentsByFeedbackId({
      variables: {
        feedback_id: editData.id,
      },
    });

    await deleteFeedback({
      variables: {
        id: editData.id,
      },
    });

    toast.success("Feedback successfully deleted!", { id: notification });

    router.push("/");
  };

  return (
    <div className='mx-auto mt-[34px] mb-[78px] max-w-[588px] px-6 md:mt-14 md:mb-[223px] lg:mb-[187px] lg:mt-[92px]'>
      <Head>
        <title>Product Feedback - New Feedback</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/assets/favicon-32x32.png' />
      </Head>

      {loading ? (
        <div className='absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center text-center'>
          <LoadingSpinner />
        </div>
      ) : editData === null || editData === undefined ? (
        <Custom404 />
      ) : (
        <>
          <Header />
          <div className='relative mt-[55px] rounded-[10px] bg-white p-6 pt-11 md:mt-[68px] md:px-[42px] md:pt-[52px] md:pb-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute top-0 h-14 w-14 -translate-y-1/2'
              >
                <defs>
                  <radialGradient
                    cx='103.9%'
                    cy='-10.387%'
                    fx='103.9%'
                    fy='-10.387%'
                    r='166.816%'
                    id='a'
                  >
                    <stop stopColor='#E84D70' offset='0%' />
                    <stop stopColor='#A337F6' offset='53.089%' />
                    <stop stopColor='#28A7ED' offset='100%' />
                  </radialGradient>
                </defs>
                <g fill='none' fillRule='evenodd'>
                  <circle fill='url(#a)' cx='28' cy='28' r='28' />
                  <path
                    fill='#FFF'
                    fillRule='nonzero'
                    d='M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z'
                  />
                </g>
              </svg>
              <h3 className='text-lightnavy'>
                Editing &apos;{editData?.title}&apos;
              </h3>

              <label htmlFor='title'>
                <p className='body3 mt-6 text-lightnavy md:hidden'>
                  Feedback Title
                </p>
                <h4 className='mt-10 hidden text-lightnavy md:block'>
                  Feedback Title
                </h4>
                <p className='body3 mt-[3px] font-normal text-gray md:hidden'>
                  Add a short, descriptive headline
                </p>
                <h4 className='mt-[2px] hidden font-normal text-gray md:block'>
                  Add a short, descriptive headline
                </h4>
              </label>
              <div className='relative'>
                <input
                  {...register("title", { required: "Can't be empty" })}
                  id='title'
                  className={`mt-4 ${
                    errors.title && `ring-1 ring-[#D73737] focus:ring-[#D73737]`
                  }`}
                />
                <h4 className='absolute -bottom-1 translate-y-full font-normal text-[#D73737]'>
                  {errors.title?.message}
                </h4>
              </div>

              <label htmlFor='category'>
                <p className='body3 mt-6 text-lightnavy md:hidden'>Category</p>
                <h4 className='mt-6 hidden text-lightnavy md:block'>
                  Category
                </h4>
                <p className='body3 mt-[3px] font-normal text-gray md:hidden'>
                  Choose a category for your feedback
                </p>
                <h4 className='mt-[2px] hidden font-normal text-gray md:block'>
                  Choose a category for your feedback
                </h4>
              </label>
              <div className='relative'>
                <select
                  {...register("category", { required: "Can't be empty" })}
                  id='category'
                  className={`body2 mt-4 h-12 w-full rounded-[5px] bg-lightgray px-4 font-jost text-gray outline-none ${
                    errors.category &&
                    `ring-1 ring-[#D73737] focus:ring-[#D73737]`
                  }`}
                >
                  <option disabled value='' selected>
                    Choose an Option
                  </option>
                  <option value='ui'>UI</option>
                  <option value='ux'>UX</option>
                  <option value='enhancement'>Enhancement</option>
                  <option value='bug'>Bug</option>
                  <option value='feature'>Feature</option>
                </select>
                <h4 className='absolute -bottom-1 translate-y-full font-normal text-[#D73737]'>
                  {errors.category?.message}
                </h4>
              </div>

              <label htmlFor='status'>
                <p className='body3 mt-6 text-lightnavy md:hidden'>
                  Update Status
                </p>
                <h4 className='mt-6 hidden text-lightnavy md:block'>
                  Update Status
                </h4>
                <p className='body3 mt-[3px] font-normal text-gray md:hidden'>
                  Change feature state
                </p>
                <h4 className='mt-[2px] hidden font-normal text-gray md:block'>
                  Change feature state
                </h4>
              </label>
              <div className='relative'>
                <select
                  {...register("status")}
                  id='status'
                  className='body2 mt-4 h-12 w-full rounded-[5px] bg-lightgray px-4 font-jost text-gray outline-none'
                >
                  <option disabled value='' selected>
                    Choose an Option
                  </option>
                  <option value='suggestion'>Suggestion</option>
                  <option value='planned'>Planned</option>
                  <option value='in-progress'>In-Progress</option>
                  <option value='live'>Live</option>
                </select>
              </div>

              <label htmlFor='detail'>
                <p className='body3 mt-6 text-lightnavy md:hidden'>
                  Feedback Detail
                </p>
                <h4 className='mt-6 hidden text-lightnavy md:block'>
                  Feedback Detail
                </h4>
                <p className='body3 mt-[3px] font-normal text-gray md:hidden'>
                  Include any specific comments on what should be improved,
                  added, etc.
                </p>
                <h4 className='mt-[2px] hidden font-normal text-gray md:block'>
                  Include any specific comments on what should be improved,
                  added, etc.
                </h4>
              </label>
              <div className='relative'>
                <textarea
                  id='detail'
                  {...register("detail", { required: "Can't be empty" })}
                  className={`mt-4 ${
                    errors.detail &&
                    `ring-1 ring-[#D73737] focus:ring-[#D73737]`
                  }`}
                />
                <h4 className='absolute -bottom-1 translate-y-full font-normal text-[#D73737]'>
                  {errors.detail?.message}
                </h4>
              </div>
              <div className='mt-10 w-full space-y-4 md:hidden'>
                <ButtonSubmit1 full submit>
                  Edit Feedback
                </ButtonSubmit1>
                <div onClick={() => router.back()}>
                  <Button3 href='/' full>
                    Cancel
                  </Button3>
                </div>
                <div onClick={deleteFeedbackHandler}>
                  <Button4 href='/' full>
                    Delete
                  </Button4>
                </div>
              </div>
              <div className='mt-8 hidden md:flex md:justify-between'>
                <div onClick={deleteFeedbackHandler}>
                  <Button4 href='/'>Delete</Button4>
                </div>
                <div className='md:flex md:space-x-4'>
                  <div onClick={() => router.back()}>
                    <Button3 href='/' full>
                      Cancel
                    </Button3>
                  </div>
                  <ButtonSubmit1 submit>Edit Feedback</ButtonSubmit1>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default EditFeedback;
