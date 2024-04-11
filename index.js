var cats = ["Milo", "Otis", "Garfield"];

// Function to destructively append a cat's name to the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Function to destructively prepend a cat's name to the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Function to destructively remove the last cat's name from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Function to destructively remove the first cat's name from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Function to append a cat's name to the cats array without mutating the original array
function appendCat(name) {
    return cats.concat(name);
}

// Function to prepend a cat's name to the cats array without mutating the original array
function prependCat(name) {
    return [name].concat(cats);
}

// Function to remove the last cat's name from the cats array without mutating the original array
function removeLastCat() {
    return cats.slice(0, -1);
}

// Function to remove the first cat's name from the cats array without mutating the original array
function removeFirstCat() {
    return cats.slice(1);
}

module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat
};