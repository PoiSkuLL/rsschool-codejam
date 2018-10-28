let arr = [2, 3, 4, 1];

function sumOfOther (arr) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++, sum = 0) {
        for (let j = 0; j < arr.length; j++)
            if (i != j) sum += arr[j];
        result.push(sum);
    }
    return result;
}

console.log(sumOfOther(arr));