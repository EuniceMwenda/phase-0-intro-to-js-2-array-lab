// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
  cats.push("Ralph");
}

function destructivelyPrependCat(name){
  cats.unshift("Bob");

}

function destructivelyRemoveLastCat(){
  cats.pop();

}

function destructivelyRemoveFirstCat(){
  cats.shift()
}

//const copyOfCats= cats.slice();
//cats.push("Broom");
function appendCat(name){
  name= cats.slice();
  cats.push("Broom");
}

function  appendCat(name){

  return [...cats,name]
}

function prependCat(name){

  return [name,...cats]
}

function removeLastCat(){
  return cats.slice(0,cats.length-1)
}

function removeFirstCat(){
  return cats.slice(1)
}
// cats.length;

// cats.push("Ralph");
// console.log(cats);


