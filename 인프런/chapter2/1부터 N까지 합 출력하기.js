// 풀이 1
const fn = (num) => {
  let sum = 0;

  for (i = 1; num >= i; i++) {
    sum += i;
  }
  return sum;
};

// 풀이 2

console.log(fn(6));
