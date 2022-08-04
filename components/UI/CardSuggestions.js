import React, { useState, useEffect } from "react";
import Link from "next/link";
import TagCategory from "./TagCategory";
import CommentsCount from "./CommentsCount";
import UpvoteH from "./UpvoteH";
import UpvoteV from "./UpvoteV";
import { capitalizeFirstLetter } from "../utils/capitalize";

//graphQL
import { useQuery, useMutation } from "@apollo/client";
import { GET_VOTE_BY_FEEDBACK_ID } from "../../graphql/queries";
import { ADD_VOTE } from "../../graphql/mutations";

function CardSuggestions({ productData }) {
  const [vote, setVote] = useState(false);
  const [upVote, setUpVote] = useState(false);

  const { data, error, loading } = useQuery(GET_VOTE_BY_FEEDBACK_ID, {
    variables: {
      id: productData?.id,
    },
  });

  const [insertVote] = useMutation(ADD_VOTE, {
    refetchQueries: [GET_VOTE_BY_FEEDBACK_ID, "getVoteUsingFeedback_id"],
  });

  useEffect(() => {
    const votes = data?.getVoteUsingFeedback_id;
    const vote = votes?.find((vote) => vote.user.id == "11")?.upvote;
    //check last vote of user 11 (currently logged in)

    setVote(vote);
  }, [data]);

  useEffect(() => {
    const voteHandler = async () => {
      if (vote && upVote) return;

      if (vote === false && !upVote) return;

      console.log("voting...", upVote);

      await insertVote({
        variables: {
          user_id: "11", //change this to a variable if adding Auth.
          feedback_id: productData?.id,
          upvote: upVote,
        },
      });
    };

    voteHandler();
  }, [upVote]);

  const displayVotes = () => {
    const votes = data?.getVoteUsingFeedback_id;
    const displayNumber =
      votes?.reduce(
        (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
        0
      ) + parseInt(productData?.upvotes);

    if (votes?.length === 0) return parseInt(productData?.upvotes);

    return displayNumber;
  };

  return (
    <div className='rounded-[10px] bg-white p-6 md:flex md:items-center md:justify-between md:px-8 md:py-[28px]'>
      <div className='flex items-start'>
        <UpvoteV
          upvoteScore={displayVotes() || productData?.upvotes}
          onClick={() => setUpVote(!upVote)}
          vote={vote}
        />
        <div className='md:ml-10'>
          <Link href={`/feedback/${productData?.id}`}>
            <p className='body3 cursor-pointer font-bold text-lightnavy hover:text-blue md:hidden'>
              {productData?.title}
            </p>
          </Link>
          <Link href={`/feedback/${productData?.id}`}>
            <h3 className='hidden cursor-pointer text-lightnavy hover:text-blue md:block'>
              {productData?.title}
            </h3>
          </Link>
          <p className='body3 md:body1 my-2 font-normal text-gray md:mt-1 md:mb-3'>
            {productData?.description}
          </p>

          <TagCategory>
            {capitalizeFirstLetter(productData?.category)}
          </TagCategory>
        </div>
      </div>

      <div className='mt-4 flex items-center justify-between md:mt-0'>
        <div className='md:hidden'>
          <UpvoteH
            upvoteScore={displayVotes() || productData?.upvotes}
            onClick={() => setUpVote(!upVote)}
            vote={vote}
          />
        </div>
        <CommentsCount commentsCount={productData?.commentsList} />
      </div>
    </div>
  );
}

export default CardSuggestions;
