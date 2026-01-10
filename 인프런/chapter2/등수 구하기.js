// 풀이 1
// function solution(lists) {
//   let sortedLists = [...lists].sort((a, b) => b - a);
//   let answer = [];
//   for (let i = 0; i < sortedLists.length; i++) {
//     answer.push(sortedLists.findIndex((prev) => prev === lists[i]) + 1);
//   }

//   return answer;
// }

// 풀이 2
function solution(lists) {
  let n = lists.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < lists.length; i++) {
    for (let j = 0; j < lists.length; j++) {
      if (lists[j] > lists[i]) answer[i]++;
    }
  }

  return answer;
}

console.log(solution([87, 89, 92, 100, 76]));
console.log(solution([100, 89, 100, 100, 76]));
