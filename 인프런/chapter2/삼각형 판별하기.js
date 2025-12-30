// 풀이 1
const fn = (a, b, c) => {
  let maxNum = Math.max(a, b, c);
  let sum = a + b + c;

  return sum - maxNum > maxNum ? "YES" : "NO";
};

// 풀이 2
// const fn = (a, b, c) => {
//   let maxNum;
//   let sum = a + b + c;
//   if (a > b) maxNum = a;
//   else maxNum = b;
//   if (maxNum < c) maxNum = c;

//   return sum - maxNum > maxNum ? "YES" : "NO";
// };

console.log(fn(5, 6, 7));
