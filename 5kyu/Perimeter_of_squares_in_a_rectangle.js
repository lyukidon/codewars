function perimeter(n) {
    let arr = [1];
    let a = 1;
    let b = 0;
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s = a + b;
        b = a;
        a = s;
        arr.push(s);
    }
    return 4 * arr.reduce((a, c) => a + c);
}
