
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}
function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}
function appendCat(name) {
    return [...cats,name];
}
function prependCat(name){
  return [name,...cats];  
}
function removeLastCat(name) {
    return cats.slice(0,-1);
}
function removeFirstCat(name) {
    return cats.slice(1);
}