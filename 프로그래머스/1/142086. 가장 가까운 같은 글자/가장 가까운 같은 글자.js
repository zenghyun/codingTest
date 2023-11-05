function solution(s) {
  let area = [...s];
  let arr = [];
  let answer = [];
  for (let i in area) {
    if (arr.indexOf(area[i]) === -1) {
      arr.push(area[i]);
      answer.push(-1);
    } else if (arr.indexOf(area[i]) !== -1) {
      let find = area[i];
      let cnt = 0;
      for (let j = arr.length - 1; j >= 0; j--) {
        cnt++;
        if (arr[j] === find) {
          arr.push(area[i]);
          answer.push(cnt);
          break;
        }
      }
    }
  }
  return answer;
}