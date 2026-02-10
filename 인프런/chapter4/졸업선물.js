// 1. 모든 값에 50% discount 해서 더해봐야 함
// 2. 총 금액 내에서 두 값의 합이 작은 순으로 더하여 최대로 담을 수 있는 경우의 수를 구한다.
function solution(key, list) {
  let answer = 0;
  let people = key[0];
  let money = key[1];
  for (let i = 0; i < people; i++) {
    let maxMoney = money;

    maxMoney -= list[i][0] / 2 + list[i][1];

    if (maxMoney < 0) continue;
    let count = 1;
    let arr = [];

    for (let j = 0; j < people; j++) {
      if (i === j) continue;
      arr.push(list[j][0] + list[j][1]);
    }

    arr.sort((a, b) => a - b);

    for (let cost of arr) {
      if (maxMoney >= cost) {
        maxMoney -= cost;
        count++;
      } else {
        break;
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
}

console.log(
  solution(
    [5, 28],
    [
      [6, 6],
      [2, 2],
      [4, 3],
      [4, 5],
      [10, 3],
    ]
  )
);
