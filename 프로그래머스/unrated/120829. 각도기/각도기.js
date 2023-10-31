function solution(angle) {
    var answer = angle;
    switch(true) {
        case answer > 0 && answer < 90 : 
        return 1;
        case answer === 90 : 
        return 2;
        case answer > 90 && answer < 180 : 
        return 3;
        case answer === 180 : 
        return 4;
        
    }
    return answer;
}