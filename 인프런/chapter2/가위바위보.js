// 1
function solution(set, a, b) {
  return Array.from({ length: set }, (_, i) => {
    if ((a[i] === 3 && b[i] === 1) || a[i] < b[i]) {
      return "B";
    } else if ((a[i] === 1 && b[i] === 3) || a[i] > b[i]) {
      return "A";
    } else {
      return "D";
    }
  });
}

console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
