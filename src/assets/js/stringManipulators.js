function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeWords(string) {
    return string.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
}


function getWordFirstLetter(string) {
    const firstLetters = string.split(" ").map(word => word.charAt(0)).join("").toUpperCase();
    return firstLetters;
}


export { capitalizeFirstLetter, capitalizeWords, getWordFirstLetter };