import React, { useState, useEffect } from "react";
import TagCategory from "./TagCategory";
import { capitalizeFirstLetter } from "../utils/capitalize";
import Link from "next/link";
import UpvoteH from "./UpvoteH";
import CommentsCount from "./CommentsCount";

//graphQL
import { useQuery, useMutation } from "@apollo/client";
import { GET_VOTE_BY_FEEDBACK_ID } from "../../graphql/queries";
import { ADD_VOTE } from "../../graphql/mutations";

function CardRoadmap({ itemData, filterRoadmap }) {
  const [vote, setVote] = useState(false);
  const [upVote, setUpVote] = useState(false);

  const { data, error, loading } = useQuery(GET_VOTE_BY_FEEDBACK_ID, {
    variables: {
      id: itemData?.id,
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
          feedback_id: itemData?.id,
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
      ) + parseInt(itemData?.upvotes);

    if (votes?.length === 0) return parseInt(itemData?.upvotes);

    return displayNumber;
  };

  return (
    <li
      className={`relative cursor-pointer rounded-[10px] bg-white ${
        filterRoadmap === "Planned"
          ? `planned`
          : filterRoadmap === "In-Progress"
          ? `progress`
          : `live`
      }`}
    >
      <div
        className={`absolute h-[6px] w-full rounded-t-[10px] ${
          filterRoadmap === "Planned"
            ? `bg-melon`
            : filterRoadmap === "In-Progress"
            ? `bg-blue`
            : `bg-cyan`
        }`}
      />
      <div className='p-6 pt-[22px] md:flex md:h-full md:min-h-[251px] md:flex-col md:justify-between md:pt-[26px] lg:min-h-[272px] lg:p-8'>
        <div>
          <div className='flex items-center'>
            <div
              className={`mr-4 h-2 w-2 rounded-full ${
                filterRoadmap === "Planned"
                  ? `bg-melon`
                  : filterRoadmap === "In-Progress"
                  ? `bg-blue`
                  : `bg-cyan`
              } `}
            />
            <p className='body3 text-gray'>{filterRoadmap}</p>
          </div>
          <Link href={`/feedback/${itemData.id}`}>
            <p className='body3 mt-4 cursor-pointer font-bold text-lightnavy hover:text-blue md:mt-[14px] lg:hidden'>
              {itemData.title}
            </p>
          </Link>
          <Link href={`/feedback/${itemData.id}`}>
            <h3 className='mt-2 hidden cursor-pointer font-bold text-lightnavy hover:text-blue lg:block'>
              {itemData.title}
            </h3>
          </Link>
          <p className='body3 lg:body1 mb-2 mt-[9px] font-normal text-gray md:mb-6 lg:mt-1 lg:mb-4'>
            {itemData.description}
          </p>
        </div>

        <div>
          <TagCategory>{capitalizeFirstLetter(itemData.category)}</TagCategory>
          <div className='mt-4 flex items-center justify-between'>
            <UpvoteH
              upvoteScore={displayVotes() || itemData?.upvotes}
              onClick={() => setUpVote(!upVote)}
              vote={vote}
            />
            <CommentsCount commentsCount={itemData?.commentsList} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default CardRoadmap;
