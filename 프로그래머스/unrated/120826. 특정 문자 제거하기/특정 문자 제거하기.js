function solution(my_string, letter) {
    return [...my_string].filter(alphabet => alphabet !== letter).join("");
}