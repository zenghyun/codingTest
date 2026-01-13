function solution(n) {
    var answer = [];
    var arr = String(n).split(''); 
    for(let i = 0; i <  arr.length; i++) {
        answer.push(Number(arr[arr.length - i - 1]))
    }
    
    return answer;
}