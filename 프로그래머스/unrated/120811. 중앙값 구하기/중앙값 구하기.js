function solution(array) {
  var length = Math.ceil(array.length / 2) - 1;
  return array.sort((a, b) => a - b)[length];
}