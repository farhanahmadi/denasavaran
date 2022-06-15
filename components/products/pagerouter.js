export const emptyTagFilter = (router, tag) => {
  const result = router.replace(tag, "");

  return result;
};
export const tagArrayHandler = (tagsQuery, number) => {
  const newArray = tagsQuery.split(",");

  const result = newArray.filter((item) => item != number);

  return result;
};
