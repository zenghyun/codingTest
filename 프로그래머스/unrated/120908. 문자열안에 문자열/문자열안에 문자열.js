function solution(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (Array.from(str1).splice(i, str2.length).join("") === str2) {
      return 1;
    }
  }
  return 2;
}