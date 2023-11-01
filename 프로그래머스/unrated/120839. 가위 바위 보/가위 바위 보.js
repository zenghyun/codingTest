function solution(rsp) {
  var answer = "";
  for (let a of rsp) {
    a === "2" ? (answer += "0") : a === "0" ? (answer += "5") : (answer += "2");
  }
  return answer;
}