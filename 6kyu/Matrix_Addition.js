// https://www.codewars.com/kata/526233aefd4764272800036f

function matrixAddition(a, b) {
    let answer = [];
    if (a.length === b.length) {
        for (let y = 0; y < a.length; y++) {
            let temp = [];
            for (let x = 0; x < a[y].length; x++) {
                temp.push(a[y][x] + b[y][x]);
            }
            answer.push(temp);
        }
        return answer;
    } else {
        return "error";
    }
}
