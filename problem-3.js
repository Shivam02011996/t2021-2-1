function OddInput(n) {
    let arr = [];
    let i;
    for (i = 1; i <= 2 * n; i++) {
        if (i % 2 == 0)
            continue;
        else
            arr.push(i);
    }
    return arr.join();
}

console.log(OddInput(5));