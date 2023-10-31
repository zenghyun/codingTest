function solution(keymap, targets) {
  let map = new Map();
  let answer = [];
  keymap.forEach((keyword) => {
    for (let i = 0; i < keyword.length; i++) {
      map.has(keyword[i])
        ? map.set(keyword[i], Math.min(map.get(keyword[i]), i + 1))
        : map.set(keyword[i], i + 1);
    }
});

    targets.forEach(target => {
        let sum = 0; 
        for(let i = 0; i < target.length; i++) {
            if(map.has(target[i])) {
                sum += map.get(target[i]);
            } else {
                sum = -1;
                break;
            }
        }
        answer.push(sum);
    })
    return answer;
}