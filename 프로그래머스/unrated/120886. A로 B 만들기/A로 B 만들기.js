function solution(before, after) {
    let beforeArr = before.split('');
    let afterArr = after.split('');

    beforeArr.filter(v => {
        if(afterArr.indexOf(v) !== -1) {
            afterArr.splice(afterArr.indexOf(v),1);
        }
    })
    return afterArr.length === 0 ? 1 : 0;
}