//Convert Strings to URL 
function urlSlug(title) {
    return title
        .split(" ")
        .filter(substring => substring !== "")
        .join("-")
        .toLowerCase();


}

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));