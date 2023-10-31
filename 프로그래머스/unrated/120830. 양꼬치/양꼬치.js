function solution(n, k) {
    var freeDrink = Math.floor(n / 10);
    var answer = (n * 12000) + ((k- freeDrink) * 2000);
    return answer;
}