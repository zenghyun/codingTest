function solution(food) {
  let str = "";
  food = food.slice(1);
  for (let a = 0; a < food.length; a++) {
    str += String(a + 1).repeat(Math.floor(food[a] / 2));
  }

  return str + "0" + [...str].reverse().join("");
}