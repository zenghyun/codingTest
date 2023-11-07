function solution(array, n) {
  let arr = [...array];
  arr.push(n);
  arr.sort((a, b) => a - b);
  let [left, right] = [arr.indexOf(n) - 1, arr.indexOf(n) + 1];
  if (left !== -1 && right !== -1) {
    let leftNum = n - arr[left];
    let rightNum = arr[right] - n;
    return leftNum > rightNum ? arr[right] : arr[left];
  } else if (left === -1) {
    return arr[right];
  } else {
    return arr[left];
  }
}
