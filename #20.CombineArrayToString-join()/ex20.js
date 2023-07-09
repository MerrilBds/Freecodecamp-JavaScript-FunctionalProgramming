/*
The join method is used to join the elements of an array together to create a string.
 It takes an argument 
for the delimiter that is used to separate the array elements in the string.
*/

function sentensify(str) {
    const words = str.split(/\W/);
    const sentence = words.join(" ");
    return sentence;
}

sentensify("May-the-force-be-with-you");