function solution(a, b, n) {
  let result = 0;

  while (n >= a) {
    let num = Math.floor(n / a);
    result += num * b;
    n = n - num * a + num * b;
  }
  return result;
}