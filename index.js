const cats=["Milo", "Otis", "Garfield"]
console.log(cats);

function destructivelyAppendCat(name){
    console.log(cats.push(name))
}
destructivelyAppendCat(Ralph)

function destructivelyPrependCat(name){
    console.log(cats.unshift(name))
}
destructivelyPrependCat(Bob)

function destructivelyRemoveLastCat(){
    console.log(cats.pop())
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    console.log(cats.shift())
}
destructivelyRemoveFirstCat()

function appendCat(name){
    const newcat=[...cats,name];
    return newcat
}
appendCat(broom)

function prependCat(name){
    const be=[name,...cats]
    return be
}
prependCat(Arnold)

function removeLastCat(){
    return cats.slice(0,2)
}
removeLastCat()

function removeFirstCat(){
    return cats.slice(1,3)
}
removeFirstCat()