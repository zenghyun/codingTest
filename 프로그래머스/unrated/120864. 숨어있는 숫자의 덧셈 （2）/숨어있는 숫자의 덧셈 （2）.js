function solution(my_string) {
  let alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97)
  );
  my_string = my_string.toLowerCase();
  for (let v of alphabet) {
    if (my_string.indexOf(v) !== -1) {
      my_string = my_string.split(v).join();
    }
  }
  return my_string.split(",").reduce((pre, cur) => pre + Number(cur), 0);
}