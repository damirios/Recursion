function fibonacci(n) {
    const result = [];
    if (n === 0) {
        
    } else if (n === 1) {
        result.push(0);
    } else if (n === 2) {
        result.push(0);
        result.push(1);
    } else {
        result.push(0);
        result.push(1);
        for (let i = 2; i < n; i++) {
            result.push(result[i - 2] + result[i - 1]);
        }
    }
    return result;
}

function fibonacciRecursive(n) {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const fibRec = fibonacciRecursive(n - 1);
        return fibRec.concat([fibRec[n - 3] + fibRec[n - 2]]);
    }
}

console.log(fibonacciRecursive(8));