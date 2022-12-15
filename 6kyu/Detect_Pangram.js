// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
    string = string.toLowerCase();
    let obj = {};
    for (let i = 97; i <= 122; i++) {
        if (string.indexOf(String.fromCharCode(i)) !== -1) {
            obj[String.fromCharCode(i)] = 1;
        }
    }
    return Object.keys(obj).length === 26 ? true : false;
}
