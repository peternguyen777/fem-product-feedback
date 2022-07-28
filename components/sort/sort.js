export const sortFunction = (input, filterSelect, categorySelect) => {
  input.map((item) => {
    if (item.comments === undefined) {
      item.comments = [];
    }
  });

  var categorizedInputs = input;

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
      (a, b) => b.comments?.length - a.comments?.length
    );
    return result;
  }

  if (filterSelect === "Least Comments") {
    const result = categorizedInputs.sort(
      (a, b) => a.comments?.length - b.comments?.length
    );
    return result;
  }

  return;
};
