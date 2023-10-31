function solution(my_string) {
  var arr = ["a", "e", "i", "o", "u"];
  var answer = my_string;
  arr.forEach((alphabet) => {
    answer = [...answer].filter((w) => alphabet !== w);
  });
  return answer.join("");
}