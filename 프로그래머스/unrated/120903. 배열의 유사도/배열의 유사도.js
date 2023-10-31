function solution(s1, s2) {
    var answer = 0;

    s1.forEach(v => {
        s2.filter(a => {
            v === a ? answer++ : 0;
        })
    })
    return answer;
}