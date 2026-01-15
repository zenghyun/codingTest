function solution(text) {
  console.log(
    "A".codePointAt(),
    "Z".codePointAt(),
    "a".codePointAt(),
    "z".codePointAt()
  );
  let answer = "YES";

  // 1
  //   let filteredText = text
  //     .split("")
  //     .filter((t) => {
  //       let codeNumber = t.codePointAt();
  //       if (
  //         (codeNumber >= 65 && codeNumber <= 90) ||
  //         (codeNumber >= 97 && codeNumber <= 122)
  //       ) {
  //         return t;
  //       }
  //     })
  //     .join("")
  //     .toLowerCase();

  // for (let i = 0; i < filteredText.length; i++) {
  //   if (filteredText[i] !== filteredText[filteredText.length - i - 1]) {

  //     answer = "NO";
  //   }
  // }

  // 2
  let filteredText = text.toLowerCase().replace(/[^a-z]/g, "");

  if (filteredText.split("").reverse().join("") !== filteredText) {
    answer = "NO";
  }

  return answer;
}

console.log(solution("foond, time: study; Yduts; emit, 7Dnuof"));
