import minimist from 'minimist'

const args = minimist(process.argv.slice(2))

var sides = 6
var dice = 2
var rolls = 1

if (args.sides) {
  sides = args.sides
}
if (args.dice) {
  dice = args.dice
}
if (args.rolls) {
  rolls = args.rolls
}

function roll(numSides, numDice, numRolls) {
  var results = []
  for (let i = 0; i < numRolls; i++){
    let randNum = Math.floor(Math.random() * numSides * numDice) + 1
    results[i] = randNum
  }
  var jsonResults = {sides: numSides, dice: numDice, rolls: numRolls, results: results};
  return jsonResults 
}  
