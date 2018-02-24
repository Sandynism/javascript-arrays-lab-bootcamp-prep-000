const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  return kittens.push(name) //adds kitten to end
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name) //adds kitten to beginning
}
