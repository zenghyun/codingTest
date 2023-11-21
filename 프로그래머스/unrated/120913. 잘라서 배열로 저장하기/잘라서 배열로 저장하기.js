function solution(my_str, n) {
    let arr = Array.from(my_str);
    let answer = [];

    while(arr.length > 0) {
        answer.push(arr.splice(0,n).join(''));
    }
    return answer;
}