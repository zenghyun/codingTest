function solution(t, p) {
  let arr = [];

  for (let i = 0; i < t.length; i++) {
    t.slice(i, i + 3);
    if (i + p.length - 1 === t.length) {
      break;
    }
    arr.push(t.slice(i, i + p.length));
  }
  arr = arr.map((v) => v * 1).filter((v) => v <= Number(p)).length;
  return arr;
}