function solution(a, b, n) {
  let result = 0;

  while (n >= a) {
    let num = Math.floor(n / a);
    console.log(num);
    console.log(n);
    result += num * b;
    console.log(result);
    if (num % 2 !== 0 && num !== 1) {
    //   result += 1;
    }
    n = n - num * a + num * b;
    console.log(n);
  }
  return result;
}