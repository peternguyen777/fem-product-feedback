export const sortRequests = (input, filterSelect, categorySelect) => {
  var categorizedInputs = input?.slice();

  if (categorySelect != "all") {
    categorizedInputs = input?.filter(
      (item) => item.category.toLowerCase() === categorySelect.toLowerCase()
    );
  }

  if (filterSelect === "Most Upvotes") {
    const result = categorizedInputs?.sort((a, b) => {
      var aUpvotesTotal = parseInt(a?.upvotes);
      var bUpvotesTotal = parseInt(b?.upvotes);

      ///tally A votes and add to total
      const aVotes = a?.voteList;
      aUpvotesTotal += aVotes?.reduce(
        (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
        0
      );

      ///tally B votes and add to total
      const bVotes = b?.voteList;
      bUpvotesTotal += bVotes?.reduce(
        (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
        0
      );

      return bUpvotesTotal - aUpvotesTotal;
    });

    return result;
  }

  if (filterSelect === "Least Upvotes") {
    const result = categorizedInputs?.sort((a, b) => {
      var aUpvotesTotal = parseInt(a?.upvotes);
      var bUpvotesTotal = parseInt(b?.upvotes);

      ///tally A votes and add to total
      const aVotes = a?.voteList;
      aUpvotesTotal += aVotes?.reduce(
        (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
        0
      );

      ///tally B votes and add to total
      const bVotes = b?.voteList;
      bUpvotesTotal += bVotes?.reduce(
        (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
        0
      );

      return aUpvotesTotal - bUpvotesTotal;
    });
    return result;
  }

  if (filterSelect === "Most Comments") {
    const result = categorizedInputs?.sort((a, b) => {
      var aCommentsTotal = a.commentsList.length;
      var bCommentsTotal = b.commentsList.length;

      for (let i = 0; i < a.commentsList.length; i++) {
        aCommentsTotal += a.commentsList[i].replyToCommentList.length;
      }

      for (let i = 0; i < b.commentsList.length; i++) {
        bCommentsTotal += b.commentsList[i].replyToCommentList.length;
      }

      return bCommentsTotal - aCommentsTotal;
    });
    return result;
  }

  if (filterSelect === "Least Comments") {
    const result = categorizedInputs?.sort((a, b) => {
      var aCommentsTotal = a.commentsList.length;
      var bCommentsTotal = b.commentsList.length;

      for (let i = 0; i < a.commentsList.length; i++) {
        aCommentsTotal += a.commentsList[i].replyToCommentList.length;
      }

      for (let i = 0; i < b.commentsList.length; i++) {
        bCommentsTotal += b.commentsList[i].replyToCommentList.length;
      }

      return aCommentsTotal - bCommentsTotal;
    });
    return result;
  }

  return;
};
