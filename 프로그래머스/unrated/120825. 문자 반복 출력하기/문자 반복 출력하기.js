function solution(my_string, n) {
    var answer = '';
    for(let alphabet in my_string) {
        answer = answer + my_string[alphabet].repeat(n);
    }
    return answer;
}