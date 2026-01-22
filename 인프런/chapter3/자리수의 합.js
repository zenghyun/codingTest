function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  arr.forEach((num) => {
    let sum = String(num)
      .split("")
      .reduce((pre, cur) => Number(pre) + Number(cur));

    if (max < sum) {
      max = Math.max(max, sum);
      answer = num;
    } else if (max === sum) {
      if (num > answer) answer = num;
    }
  });

  console.log(max, answer);

  return answer;
}
console.log(solution([137, 460, 603, 40, 521, 128, 910]));
