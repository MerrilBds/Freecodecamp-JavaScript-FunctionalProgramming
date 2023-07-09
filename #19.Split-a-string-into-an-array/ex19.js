function splitify(str) {
    const bySpace = str.split(/[^\w]/);
    return bySpace;
}

console.log(splitify("Hello World,I-am code"));