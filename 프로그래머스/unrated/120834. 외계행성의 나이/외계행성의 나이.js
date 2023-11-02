function solution(age) {
  let alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(index + 97)
  );
  let answer = "";
  let arr = String(age).split("");

  for (let i in arr) {
    answer += alphabet[arr[i]];
  }
  return answer;
}