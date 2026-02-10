// 1. 숫자를 큰 순서대로 나열한다.
// 2. 숫자를 큰 순서대로 3장씩 더할 수 있는 모든 경우의 수를 구한다.
// 3. 그 중 k 번째로 큰 합을 return

function solution(n, k, arr) {
  let temp = new Set();
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        temp.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  //   maxList = new Set(maxList.sort((a, b) => b - a));

  let answer = [...new Set(temp)].sort((a, b) => b - a);
  return answer[k - 1];
}
console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
