const solution = (nums) => {
  const oddLists = nums.filter((num) => num % 2 !== 0);

  return [
    oddLists.reduce((prev, accum) => (accum += prev)),
    Math.min(...oddLists),
  ];
};

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
