function solution(box, n) {
  return box.map((v) => Math.floor(v / n)).reduce((pre, cur) => pre * cur, 1);
}
