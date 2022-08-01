import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ButtonSubmit1 from "../../../components/UI/ButtonSubmit1";
import Button3 from "../../../components/UI/Button3";
import Button4 from "../../../components/UI/Button4";
import { useForm } from "react-hook-form";
import data from "../../../public/data.json"; //import json data

const productRequests = data.productRequests;

function EditFeedback({ productRequest }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => console.log(data);

  const router = useRouter();

  return (
    <div className='mx-auto mt-[34px] mb-[78px] max-w-[588px] px-6 md:mt-14 md:mb-[223px] lg:mb-[187px] lg:mt-[92px]'>
      <Head>
        <title>Product Feedback - New Feedback</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/assets/favicon-32x32.png' />
      </Head>

      <div
        className='flex cursor-pointer items-center'
        onClick={() => router.back()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='mr-4 h-[10px] w-[7px] stroke-blue stroke-2'
        >
          <path d='M6 9L2 5l4-4' fill='none' fillRule='evenodd' />
        </svg>
        <p className='body3 text-gray md:hidden'>Go Back</p>
        <h4 className='hidden text-gray md:block'>Go Back</h4>
      </div>

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
            Editing &apos;{productRequest.title}&apos;
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
            <h4 className='mt-6 hidden text-lightnavy md:block'>Category</h4>
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
                errors.category && `ring-1 ring-[#D73737] focus:ring-[#D73737]`
              }`}
            >
              <option disabled value='' selected>
                Choose an Option
              </option>
              <option value='UI'>UI</option>
              <option value='UX'>UX</option>
              <option value='Enhancement'>Enhancement</option>
              <option value='Bug'>Bug</option>
              <option value='Feature'>Feature</option>
            </select>
            <h4 className='absolute -bottom-1 translate-y-full font-normal text-[#D73737]'>
              {errors.category?.message}
            </h4>
          </div>

          <label htmlFor='status'>
            <p className='body3 mt-6 text-lightnavy md:hidden'>Update Status</p>
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
              <option value='Planned'>Planned</option>
              <option value='In-Progress'>In-Progress</option>
              <option value='Live'>Live</option>
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
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <h4 className='mt-[2px] hidden font-normal text-gray md:block'>
              Include any specific comments on what should be improved, added,
              etc.
            </h4>
          </label>
          <div className='relative'>
            <textarea
              id='detail'
              {...register("detail", { required: "Can't be empty" })}
              className={`mt-4 ${
                errors.detail && `ring-1 ring-[#D73737] focus:ring-[#D73737]`
              }`}
            />
            <h4 className='absolute -bottom-1 translate-y-full font-normal text-[#D73737]'>
              {errors.detail?.message}
            </h4>
          </div>
          <div className='mt-10 w-full space-y-4 md:hidden'>
            <ButtonSubmit1 full submit>
              Add Feedback
            </ButtonSubmit1>
            <div onClick={() => router.back()}>
              <Button3 full>Cancel</Button3>
            </div>
            <Button4 full>Delete</Button4>
          </div>
          <div className='mt-8 hidden md:flex md:justify-between'>
            <Button4>Delete</Button4>
            <div className='md:flex md:space-x-4'>
              <div onClick={() => router.back()}>
                <Button3 full>Cancel</Button3>
              </div>
              <ButtonSubmit1 submit>Add Feedback</ButtonSubmit1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditFeedback;

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: productRequests.map((project) => ({
      params: { editId: project.id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const editId = context.params.editId;

  const selectedRequest = productRequests.find(({ id }) => id == editId);

  return {
    props: {
      productRequest: selectedRequest,
    },
  };
}