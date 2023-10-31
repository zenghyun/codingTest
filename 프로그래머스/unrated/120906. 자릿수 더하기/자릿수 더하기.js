function solution(n) {
    var answer = [];
    var n = String(n);
    for(let i = 0; i < n.length; i++) {
        answer.push(Number(n[i]));
    }
    return answer.reduce((pre,cur) => pre+cur);
}