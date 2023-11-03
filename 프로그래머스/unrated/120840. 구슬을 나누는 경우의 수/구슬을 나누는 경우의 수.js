
function solution(balls, share) {
  let n = 1;
  let m = 1;
  let l = 1;
  let diff = balls - share;
  for (let i = 1; i <= balls; i++) {
    n *= i;
  }
  for (let i = 1; i <= share; i++) {
    m *= i;
  }
  for (let i = 1; i <= diff; i++) {
    l *= i;
  }
  return Math.round(n / (m * l));
}