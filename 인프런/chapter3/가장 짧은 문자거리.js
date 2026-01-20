function solution(text, alphabet) {
  let arr1 = [];
  let arr2 = [];
  let answer = [];
  let n = text.length;

  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < n; i++) {
    if (text[i] !== alphabet) {
      num1 += 1;
    } else {
      num1 = 0;
    }

    if (text[n - i - 1] !== alphabet) {
      num2 += 1;
    } else {
      num2 = 0;
    }

    arr1.push(num1);
    arr2.push(num2);
  }
  arr2 = arr2.reverse();

  for (let j = 0; j < n; j++) {
    let min = Math.min(arr1[j], arr2[j]);
    answer.push(min);
  }

  return answer;
}

// 1 0 1 2 1 0 1 2 2 1 0
console.log(solution("teachermode", "e"));
