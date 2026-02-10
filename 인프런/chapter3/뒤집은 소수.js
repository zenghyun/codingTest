function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(list) {
  let answer = [];
  for (let x of list) {
    let reverse = Number(x.toString().split("").reverse().join(""));
    console.log(reverse);
    if (isPrime(reverse)) {
      answer.push(reverse);
    }
  }
  return answer.join(" ");
}

// 23 2 73 2 3
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
