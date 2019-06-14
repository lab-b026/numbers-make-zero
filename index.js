function numberMakeZero(num) {
    if (num <= 1)
        return [0];

    if (num === 2)
        return [-1, 1];

    const nextNum = num - 2;

    if (num % 2 === 0)
        return [nextNum, -1 * nextNum].concat(numberMakeZero(nextNum))
    else
        return [0].concat(numberMakeZero(num - 1))
}

const test = numberMakeZero(12);

console.log(test);