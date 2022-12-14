// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words) {
    const arr = words.split(" ");
    const arrMod = [...arr].reduce(function (a, c, i) {
        a.push(parseInt(c.split("").filter((cc) => isNaN(cc) === false)) - 1);
        return a;
    }, []);
    let answer = [];
    for (let i = 0; i < arrMod.length; i++) {
        answer.push(arr[arrMod.indexOf(i)]);
    }
    return answer.join(" ");
}
