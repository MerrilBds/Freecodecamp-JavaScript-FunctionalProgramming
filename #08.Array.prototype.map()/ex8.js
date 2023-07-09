Array.prototype.myMap = function (callback) {
    let newArray = [];

    this.forEach((element, index, array) => {
        newArray.push(callback(element, index, array));
    });

    return newArray;
};
