const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  return kittens.push(name) //adds kitten to end
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name) //adds kitten to beginning
}

function destructivelyRemoveLastKitten() {
  return kittens.pop() //removes last kitten
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift() //removes first kitten
}

function appendKitten(name) {
  return [...kittens, name] //use ...spread operator to preserve original array
}

function prependKitten(name) {
  return [name, ...kittens] //put spread operator at the end
}


