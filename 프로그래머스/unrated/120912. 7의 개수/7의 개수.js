function solution(array) {
  let cnt = 0;
  for (let i of array.join("")) {
    i === "7" ? cnt++ : undefined;
  }
  return cnt;
}
