function solution(n) {
    let answer = 1; 
    let cnt = 0;
    let i = 2;
    while(answer <= n){
        answer *= i;
        i++;
        cnt++;
    }
    return cnt;
}