function solution(my_string) {
    var answer = [...my_string].map(v => Number(v)).filter(num => num).reduce((pre,cur) => pre+cur);
    return answer;
}