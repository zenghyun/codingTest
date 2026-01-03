/**
 *
 * @param list
 * @returns
 *
 * 주어진 수 일곱개의 합을 100을 만들어서 합한 숫자 목록을 return
 */
// function solution(list) {
//   let arr = list;
//   let sum = list.reduce((pre, cur) => pre + cur, 0);
//   let flag = false;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (sum - (arr[i] + arr[j]) === 100) {
//         arr.splice(j, 1);
//         arr.splice(i, 1);
//         flag = true;
//         break;
//       }
//     }
//     if (flag === true) {
//       break;
//     }
//   }

//   return arr;
// }

function solution(lists) {
  let answer = lists;
  let sum = lists.reduce((pre, cur), pre + cur, 0);

  for (let i = 0; i < list.length - 1, i++; ) {
    for (let j = i + 1; j < list.length; j++) {
      if (sum - (list[i] + list[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}
console.log(solution([22, 7, 22, 18, 10, 15, 25, 8, 13]));
