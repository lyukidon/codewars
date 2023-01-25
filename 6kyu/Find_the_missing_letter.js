// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array) {
    let abc = [];
    for (let i = 97; i <= 122; i++) {
        abc.push(String.fromCharCode(i));
    }
    let LowerCase = true;
    if (array[0] !== array[0].toLowerCase()) {
        LowerCase = false;
    }
    array = array.map((c) => c.toLowerCase());
    const start = abc.indexOf(array[0]);
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== abc[i + start]) {
            if (LowerCase === false) {
                return abc[i + start].toUpperCase();
            } else {
                return abc[i + start];
            }
        }
    }
}
