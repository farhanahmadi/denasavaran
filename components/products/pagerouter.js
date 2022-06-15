export const UrlHandler = (router, prevUrl, newUrl) => {
  const result = router.replace(prevUrl, newUrl);

  return result;
};
export const UrlHandlerWithPage = (router, page ,  prevUrl, newUrl) => {
  const removePage = router.replace(page , "");
  const result = removePage.replace(prevUrl, newUrl);

  return result;
};
export const removePage = (router , page , link) =>{
  const newLink = router.replace(page, "");
  const result = `${newLink}${link}`

  return result;
}
export const emptyTagFilter = (router, page , tag) => {
  const removePage = router.replace(page , "");
  const result = removePage.replace(tag, "");

  return result;
};
export const emptyCategoryFilter = (router, page, category) => {
  const removePage = router.replace(page , "");
  const result = removePage.replace(category, "");

  return result;
};
export const emptyCategoriesFilter = (router, tag) => {
  const result = router.replace(tag, "");

  return result;
};
export const tagArrayHandler = (tagsQuery, number) => {
  const newArray = tagsQuery.split(",");

  const result = newArray.filter((item) => item != number);

  return result;
};
export const tagArrayUrlHandler = (tagsQuery, page, router , number) => {
  const removePage = router.replace(page , "");
  const newArray = tagsQuery.split(",");

  const result = removePage.replace(`tags__in=${tagsQuery}` , `tags__in=${newArray.filter((item) => item != number)}`);

  return result;
};
export const categoriesArrayHandler = (tagsQuery, number) => {
  const newArray = tagsQuery.split(",");

  const result = newArray.filter((item) => item != number);

  return result;
};
export const categoriesArrayUrlHandler = (tagsQuery, page , router , number) => {
  const removePage = router.replace(page , "");
  const newArray = tagsQuery.split(",");

  const result = removePage.replace(`categories=${tagsQuery}` , `categories=${newArray.filter((item) => item != number)}`);

  return result;
};

