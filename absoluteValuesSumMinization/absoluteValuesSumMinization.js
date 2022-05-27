export function absoluteValuesSumMinimization(a: number[]): number {
    let minDiff: number = Infinity;
    let index = 0;
    for (let i = 0; i < a.length; i++) {
        let diff = 0;
        for (let j = 0; j < a.length; j++) {
            diff += Math.abs(a[i] - a[j]);
        }
        if (diff < minDiff && a[index] < a[i]) {
            minDiff = diff;
            index = i
        }
    }
    return a[index]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));