function solution(s, skip, index) {
  let alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97)
  ).filter(v => !skip.includes(v));

  let text = [...s];
  let answer = "";

  text.forEach((v) => {
    let num = alphabet.indexOf(v) + index;
    while (num >= alphabet.length) {
      num -= alphabet.length;
    }
    alphabet[num - 1] === "z" ? (num = 0) : (num = num);
    answer += alphabet[num];
  });
  
  return answer;
}
