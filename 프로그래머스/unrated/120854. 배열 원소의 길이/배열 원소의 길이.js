function solution(strlist) {
    var answer = Array.from({length:strlist.length}, (undefined,j) => strlist[j].length);
    return answer;
}