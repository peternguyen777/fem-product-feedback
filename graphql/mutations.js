import { gql } from "@apollo/client";

export const ADD_FEEDBACK = gql`
  mutation MyMutation(
    $description: String!
    $title: String!
    $category: String!
  ) {
    insertFeedback(
      description: $description
      title: $title
      category: $category
    ) {
      id
      status
      title
      upvotes
      description
      created_at
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation MyMutation($feedback_id: ID!, $user_id: ID!, $content: String!) {
    insertComments(
      content: $content
      feedback_id: $feedback_id
      user_id: $user_id
    ) {
      content
      created_at
      user {
        name
        image
        username
      }
    }
  }
`;

export const REPLY_TO_COMMENT = gql`
  mutation MyMutation(
    $content: String!
    $user_id: ID!
    $comment_id: ID!
    $feedback_id: ID!
  ) {
    insertReplyToComment(
      content: $content
      user_id: $user_id
      feedback_id: $feedback_id
      comment_id: $comment_id
    ) {
      content
      user {
        image
        name
        username
      }
      created_at
    }
  }
`;

export const DELETE_ALL_VOTES_BY_FEEDBACK_ID = gql`
  mutation MyMutation($feedback_id: ID!) {
    deleteAllVotesByFeedbackId(feedback_id: $feedback_id) {
      id
    }
  }
`;

export const DELETE_ALL_REPLIES_BY_FEEDBACK_ID = gql`
  mutation MyMutation($feedback_id: ID!) {
    deleteAllReplyToCommentsByFeedbackId(feedback_id: $feedback_id) {
      content
      comment_id
    }
  }
`;

export const DELETE_ALL_COMMENTS_BY_FEEDBACK_ID = gql`
  mutation MyMutation($feedback_id: ID!) {
    deleteAllCommentsByFeedbackId(feedback_id: $feedback_id) {
      content
      id
    }
  }
`;

export const DELETE_FEEDBACK_BY_ID = gql`
  mutation MyMutation($id: ID!) {
    deleteFeedback(id: $id) {
      id
      title
      description
    }
  }
`;

export const ADD_VOTE = gql`
  mutation MyMutation($user_id: ID!, $feedback_id: ID!, $upvote: Boolean!) {
    insertVote(user_id: $user_id, feedback_id: $feedback_id, upvote: $upvote) {
      upvote
      user {
        id
      }
    }
  }
`;
