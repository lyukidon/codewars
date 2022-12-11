// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
    let temp;
    if (arr[0] == arr[1]) {
        temp = arr[0];
    } else {
        if (arr[0] == arr[2]) {
            return arr[1];
        } else {
            return arr[0];
        }
    }
    for (let i = 2; i < arr.length; i++) {
        if (temp !== arr[i]) {
            return arr[i];
        }
    }
}
