// https://www.codewars.com/kata/5825792ada030e9601000782/solutions/javascript

function zipWith(fn, a0, a1) {
    return a0.reduce((save, cur, idx) => {
        if (cur !== undefined && a1[idx] !== undefined) {
            save.push(fn(cur, a1[idx]));
        }
        return save;
    }, []);
}
