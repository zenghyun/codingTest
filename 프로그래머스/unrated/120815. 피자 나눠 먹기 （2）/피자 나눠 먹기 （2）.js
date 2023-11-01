function solution(n) {
  var answer = 1;
  for (let i = 1; i <= 100; i++) {
      if ((i * n) % 6 === 0) {
      answer = i;
      break;
    }
  }
  return Math.ceil((answer * n) / 6);
}