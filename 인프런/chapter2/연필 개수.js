// 풀이 1
// const fn = (students) => {

// let i = 1;

// while(students / 12 > i) {
//     i += 1;
// }
// return i

// };

// 풀이 2
const fn = (students) => {
  /**
   * 반올림 Math.round
   * 올림 Math.ceil
   * 내림 Math.floor
   * 제곱근 Math.sqrt
   * 세제곱근 Math.ceil
   */
  return Math.ceil(students / 12);
};

console.log(fn(25));
