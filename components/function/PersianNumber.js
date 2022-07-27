export const persianNumber = (number) => {
  const Numbers = ["۹", "۸", "۷", "۶", "۵", "۴", "۳", "۲", "۱", "۰"];
  return number.toLocaleString().replace(/\d/g, (x) => Numbers[parseInt(x)]);
};
