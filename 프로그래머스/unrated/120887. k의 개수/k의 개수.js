function solution(i, j, k) {
    let text = Array.from({length:j-i+1}, (_,n) => n+i).join('');
    let cnt = 0;
    k = String(k);
    for(let i of text){
        i === k ? cnt++ : undefined;
    }
    return cnt;
}