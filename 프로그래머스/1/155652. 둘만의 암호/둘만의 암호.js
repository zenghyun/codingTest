function solution(s, skip, index) {
  let alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97)
  );
  [...skip].forEach((v) => {
    alphabet = alphabet.filter((w) => w !== v);
  });
  let text = [...s];
  let answer = "";
  text.forEach((v) => {
    console.log(v);
    let num = alphabet.indexOf(v) + index;
    while (num >= alphabet.length) {
      num -= alphabet.length;
    }
    if (alphabet[num - 1] === "z") {
      answer += alphabet[0];
    } else {
      answer += alphabet[num];
    }
  });
  return answer;
}