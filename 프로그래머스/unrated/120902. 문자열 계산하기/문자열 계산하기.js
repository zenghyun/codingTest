function solution(my_string) {
  let arr = my_string.trim().split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-") {
      arr[i + 1] = -arr[i + 1];
    }
  }

  let answer = 0;

  arr.forEach((v) => {
    if (parseInt(v)) {
      answer += parseInt(v, 10);
    }
  });
  return answer;
}