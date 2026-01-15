// 1
// function solution(s) {
//   let answer = 'YES';
//   let text = s.toLowerCase();
//   let length = text.length;
//   for (let i = 0; i < Math.floor(length / 2); i++) {
//     let isSame = text[i] === text[length - i - 1];
//     if (!isSame) {
//       answer = 'NO';
//       break;
//     }
//   }

//   return answer;
// }

function solution(x) {
  let answer = "YES";

  let text = x.toLowerCase();

  if (text.split("").reverse().join("") !== text) {
    answer = "NO";
  }

  return answer;
}

console.log(solution("gaoxtbxbtxoAG"));
