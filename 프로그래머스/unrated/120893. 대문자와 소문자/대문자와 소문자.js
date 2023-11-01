function solution(my_string) {
    var answer = "";

    for(let i in my_string) {
        if(my_string[i].toUpperCase() === my_string[i]) {
            answer += my_string[i].toLowerCase();
        } else {
            answer += my_string[i].toUpperCase();
        }
    }
    return answer;
}; 
