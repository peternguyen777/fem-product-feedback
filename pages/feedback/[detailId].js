import React from "react";
import CardSuggestions from "../../components/UI/CardSuggestions";
import data from "../../public/data.json"; //import json data
import Comments from "../../components/feedback/Comments";
import Header from "../../components/feedback/Header";
import AddComment from "../../components/feedback/AddComment";

const productRequests = data.productRequests;

function Detail({ productRequest }) {
  return (
    <section className='mx-auto mt-6 mb-[88px] max-w-[810px] px-6 md:mt-14 md:mb-[120px] md:px-10 lg:mb-[130px] lg:mt-[94px]'>
      <Header />
      <CardSuggestions productData={productRequest} />
      <Comments productData={productRequest} />
      <AddComment />
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
