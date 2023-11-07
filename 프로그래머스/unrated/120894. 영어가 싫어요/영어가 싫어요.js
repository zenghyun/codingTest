function solution(numbers) {
  let obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  numbers = numbers.split("");
  let text = "";
  let answer = "";
  numbers.forEach((v) => {
    text += v;
    if (obj[text] !== undefined) {
      answer += obj[text];
      text = "";
    }
  });

  return Number(answer);
}