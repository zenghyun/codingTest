function solution(nums) {
    const dp = new Array(nums.length).fill(-1);
    console.log(dp);
    const stack = [0];
    console.log(stack.length);
    for (let i = 1; i < nums.length; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            dp[stack.pop()] = nums[i];
        }
        stack.push(i);
    }
    return dp;
}
