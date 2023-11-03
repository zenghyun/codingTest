function solution(num, k) {
    let arr = [...String(num)];
    return arr.indexOf(String(k)) !== -1 ? arr.indexOf(String(k))+1 : -1 ;
}