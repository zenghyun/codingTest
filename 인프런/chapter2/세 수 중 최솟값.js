const a = 21;
const b = 25;
const c = 13;

// 풀이 1
// const minimumNumber = (a, b, c) => {
//   return Math.min(a, b, c);
// };

// 풀이 2
const minimumNumber = (a, b, c) => {
  let minNum = a;

  if (minNum > b) minNum = b;
  else minNum = a;
  if (minNum > c) minNum = c;

  return minNum;
};

console.log(minimumNumber(a, b, c));
