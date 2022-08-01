import React from "react";
import Image from "next/future/image";
import Button1 from "../../components/UI/Button1";
import ButtonSubmit1 from "../../components/UI/ButtonSubmit1";
import data from "../../public/data.json"; //import json data
import { useRouter } from "next/router";
import CardSuggestions from "../../components/UI/CardSuggestions";
import { useForm } from "react-hook-form";

const productRequests = data.productRequests;

function Detail({ productRequest }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const router = useRouter();

  var commentsLength = productRequest.comments?.length || 0;
  productRequest.comments?.map((item) => {
    commentsLength += item.replies?.length || 0;
  });

  return (
    <section className='mx-auto mt-6 mb-[88px] max-w-[810px] px-6 md:mt-14 md:mb-[120px] md:px-10 lg:mb-[130px] lg:mt-[80px]'>
      <div className='mb-6 flex items-center justify-between'>
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
        <Button1 href='/feedback/edit'>Edit Feedback</Button1>
      </div>

      <CardSuggestions productData={productRequest} />

      <div className='mt-6 rounded-[10px] bg-white p-8 pt-6'>
        <h3 className='mb-6 text-lightnavy'>{commentsLength} Comments</h3>
        {productRequest.comments?.map((item) => {
          const newPath = item.user.image.slice(1);

          return (
            <div
              key={item.id}
              className='mb-6 border-b border-[#8C92B3] border-opacity-25 pb-6 last:mb-0 last:border-none last:pb-0'
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
                  <div className='ml-4'>
                    <p className='body3 text-navy'>{item.user.name}</p>
                    <p className='body3 font-normal text-gray'>
                      @{item.user.username}
                    </p>
                  </div>
                </div>
                <p className='body3 text-blue'>Reply</p>
              </div>

              <p className='body3 mt-4 font-normal text-gray'>{item.content}</p>

              <div className='border-l border-[#8C92B3] border-opacity-25'>
                {item?.replies?.map((reply, i) => {
                  const newPathReplyUser = reply.user.image.slice(1);
                  return (
                    <div key={i} className='mt-4 pl-6'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                          <Image
                            src={newPathReplyUser}
                            alt=''
                            className='rounded-full'
                            width={40}
                            height={40}
                          />
                          <div className='ml-4'>
                            <p className='body3 text-navy'>{reply.user.name}</p>
                            <p className='body3 font-normal text-gray'>
                              @{reply.user.username}
                            </p>
                          </div>
                        </div>
                        <p className='body3 text-blue'>Reply</p>
                      </div>
                      <p className='body3 mt-4 font-normal text-gray'>
                        {reply.content}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* <hr className='my-6 text-[#8C92B3] opacity-25' /> */}
            </div>
          );
        })}
      </div>
      <form className='mt-6 rounded-[10px] bg-white p-6'>
        <h3 className='mb-6 text-lightnavy'>Add Comment</h3>
        <div className='relative'>
          <textarea
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
          <p className='body3 font-normal text-gray'>250 Characters left</p>
          <ButtonSubmit1 submit>Post Comment</ButtonSubmit1>
        </div>
      </form>
    </section>
  );
}

export default Detail;

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: productRequests.map((project) => ({
      params: { detailId: project.id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const detailId = context.params.detailId;

  const selectedRequest = productRequests.find(({ id }) => id == detailId);

  return {
    props: {
      productRequest: selectedRequest,
    },
  };
}
