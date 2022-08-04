import { gql } from "@apollo/client";

export const GET_ALL_FEEDBACK = gql`
  query MyQuery {
    getFeedbackList {
      category
      created_at
      description
      status
      title
      upvotes
      id
      commentsList {
        id
        replyToCommentList {
          id
        }
      }
      voteList {
        upvote
      }
    }
  }
`;

export const GET_FEEDBACK_BY_ID = gql`
  query MyQuery($id: ID!) {
    getFeedback(id: $id) {
      id
      category
      description
      status
      title
      upvotes
      commentsList {
        id
        created_at
        content
        feedback_id
        user {
          image
          name
          username
        }
        replyToCommentList {
          user {
            username
            name
            image
          }
          content
          feedback_id
          created_at
        }
      }
    }
  }
`;

export const GET_VOTE_BY_FEEDBACK_ID = gql`
  query MyQuery($id: ID!) {
    getVoteUsingFeedback_id(id: $id) {
      created_at
      upvote
      user {
        id
      }
    }
  }
`;
