// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce >= 1 || bounce < 0 || h <= window) {
        return -1;
    }
    let change = h * bounce;
    let count = 1;
    while (change > window) {
        change == window ? count++ : (count += 2);
        change = change * bounce;
    }
    return count;
}
