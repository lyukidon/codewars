// https://www.codewars.com/kata/52fba2a9adcd10b34300094c

function transpose(matrix) {
    let answer = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let arr = [];
        for (let j = 0; j < matrix.length; j++) {
            arr.push(matrix[j][i]);
        }
        answer.push(arr);
    }
    return answer;
}
