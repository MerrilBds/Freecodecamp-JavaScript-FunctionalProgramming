function add(x, y, z) {
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
}
console.log(add(10)(20)(30));