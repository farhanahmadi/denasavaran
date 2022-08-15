export const persianNumber = (number) => {
  const Numbers = ["۰" , "۱" ,"۲" , "۳","۴" , "۵", "۶", "۷","۸" ,"۹" ];
  return number.toLocaleString().replace(/\d/g, (x) => Numbers[parseInt(x)]);
};
