function solution(order) {
  let cnt = 0;
  order = [...String(order)];
  order.forEach((v) => {
    if (Number(v) % 3 === 0 && Number(v) !== 0) cnt++;
  });
  return cnt;
}