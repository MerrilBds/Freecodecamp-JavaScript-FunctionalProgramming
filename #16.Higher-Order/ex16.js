const squareList = arr => {
    let newArray =
        arr
            .filter(num => { if (Number.isInteger(num) && num > 0) return num; })
            .map(num => { return num * num; });
    return newArray;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);