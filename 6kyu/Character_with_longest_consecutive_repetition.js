// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

function longestRepetition(s) {
    let temp = "";
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            temp += s[i];
        } else {
            arr.push(temp + s[i]);
            temp = "";
        }
    }
    let arr_length = arr.map((c) => [c, c.length]);
    let length = arr.map((c) => c.length).sort((a, b) => b - a);
    let filtrate = arr_length.filter((c) => c[1] === length[0]);
    return arr_length.length === 0
        ? ["", 0]
        : [filtrate[0][0][0], filtrate[0][1]];
}
