// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = (N) => {
    let answer = [];
    for (let i = 0; i < N; i++) {
        answer = [...answer, i];
    }
    return answer;
};
