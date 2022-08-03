export const sortRequests = (input, filterSelect, categorySelect) => {
  var categorizedInputs = input?.slice();

  if (categorySelect != "all") {
    categorizedInputs = input.filter(
      (item) => item.category.toLowerCase() === categorySelect.toLowerCase()
    );
  }

  if (filterSelect === "Most Upvotes") {
    const result = categorizedInputs.sort((a, b) => b.upvotes - a.upvotes);
    return result;
  }

  if (filterSelect === "Least Upvotes") {
    const result = categorizedInputs.sort((a, b) => a.upvotes - b.upvotes);
    return result;
  }

  if (filterSelect === "Most Comments") {
    const result = categorizedInputs.sort(
      (a, b) => b.commentsList?.length - a.commentsList?.length
    );
    return result;
  }

  if (filterSelect === "Least Comments") {
    const result = categorizedInputs.sort(
      (a, b) => a.commentsList?.length - b.commentsList?.length
    );
    return result;
  }

  return;
};
