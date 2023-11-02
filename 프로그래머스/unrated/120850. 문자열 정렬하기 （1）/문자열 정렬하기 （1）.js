function solution(my_string) {
  return [...my_string].filter((v) => v > -1).map(v => Number(v)).sort();
}