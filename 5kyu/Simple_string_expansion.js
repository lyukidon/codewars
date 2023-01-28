// https://www.codewars.com/kata/5a793fdbfd8c06d07f0000d5/train/javascript

function solve(str) {
    let Bracket = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "(" && str[i] !== ")") {
            Bracket.push(str[i]);
        }
    }
    Bracket.reverse();
    let temp = "";
    for (let i = 0; i < Bracket.length; i++) {
        if (isNaN(Bracket[i]) === true) {
            temp += Bracket[i];
        } else {
            temp = temp.repeat(+Bracket[i]);
        }
    }
    return temp.split("").reverse().join("");
}
