// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

function multiTable(number) {
    let answer = "";
    for (let i = 1; i <= 10; i++) {
        answer += i + " * " + number + " = " + i * number + "\n";
    }
    return answer.slice(0, answer.length - 1);
}
