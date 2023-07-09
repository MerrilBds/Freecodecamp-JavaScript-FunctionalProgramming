//The some method works with arrays to check if any element passes a particular test. 
//It returns a Boolean value - true if any of the values meet the criteria, false if not.

function checkPositive(arr) {
 
    return arr.some(function (elem) {
        return elem > 0;
    });


}

checkPositive([1, 2, 3, -4, 5]);