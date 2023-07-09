const bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae"
];

function add(arr, bookName) {
    let newArray = [...arr, bookName];
    return newArray;
}

function remove(arr, bookName) {
    let newArray = [...arr];
    const bookIndex = newArray.indexOf(bookName);
    if (bookIndex >= 0) {
        newArray.splice(bookIndex, 1);
    }
    return newArray;
}
