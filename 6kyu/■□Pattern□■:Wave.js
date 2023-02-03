// https://www.codewars.com/kata/56e67d6166d442121800074c/train/javascript

function draw(waves) {
    let answer = [];
    const max = Math.max.apply(null, waves);
    for (let i = 0; i < max; i++) {
        let arr = "";
        for (let j = 0; j < waves.length; j++) {
            if (waves[j] - i <= 0) {
                arr = arr + "□";
            } else {
                arr = arr + "■";
            }
        }
        answer.push(arr);
    }
    return answer.reverse().join("\n");
}
