function solution(n) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let result = 0;
  arr.map((v) => {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
      if (v % i === 0) {
        cnt++;
      }
    }
    if (cnt >= 3) {
      result++;
    }
  });
  return result;
}