function solution(sides) {
    const [num1, num2, num3] = sides.sort((a,b) => a-b);
    return num3 >= num1 + num2 ? 2 : 1
}