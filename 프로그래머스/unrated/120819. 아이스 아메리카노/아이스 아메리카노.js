    function solution(money) {
        var answer = [Math.floor(money/5500), Math.floor(money%5500)];
        return answer;
    }