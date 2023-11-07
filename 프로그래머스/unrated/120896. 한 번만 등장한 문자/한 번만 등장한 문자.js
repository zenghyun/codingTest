function solution(s) {
    let obj = {};
    for(let i of s ) {
        obj[i] = (obj[i] ||0) + 1;
    }
    return Object.entries(obj).filter(v => v[1] === 1).map(a => a[0]).sort().join('');
}