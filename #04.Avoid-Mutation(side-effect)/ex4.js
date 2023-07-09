var fixedValue = 4;

function incrementer() {


    return fixedValue + 1;

}
var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
console.log(newValue); // Should print 5