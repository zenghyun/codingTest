function solution(array) {
  var answer = {};
  for (let i = 0; i < array.length; i++) {
    answer[array[i]] = (answer[array[i]] || 0) + 1;
  }
  var values = Object.values(answer);
  var max = Math.max(...values);
  if (values.filter((v) => v === max).length > 1 || (array.length !== 1 && max === 1)) {
    return -1;
  }
  return Number(Object.keys(answer)[values.indexOf(max)]);
}