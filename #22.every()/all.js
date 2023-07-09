//The every method works with arrays to check if every element passes a particular test. 
//It returns a Boolean value - true if all values meet the criteria, false if not.
function checkPositive(arr) {

    return arr.every(function (elem) {
        return elem > 0;
    });
}

checkPositive([1, 2, 3, -4, 5]);