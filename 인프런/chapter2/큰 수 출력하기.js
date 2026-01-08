function solution() {
  let randomNum = Math.floor(Math.random() * 10);
  let randomList = Array.from({ length: randomNum }, () => {
    return Math.floor(Math.random() * 10);
  });

  let answer = [];

  for (let i = 0; i < randomList.length - 1; i++) {
    if (i === 0) {
      answer.push(randomList[i]);
    }
    if (randomList[i + 1] > randomList[i]) {
      answer.push(randomList[i + 1]);
    }
  }

  return [answer.length, answer];
}

console.log(solution());
