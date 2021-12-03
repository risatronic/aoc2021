const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
let values = input.split('\n');

let gamma = []
let epsilon = []

for(let i = 0; i < values[0].length; i++){
  let zero = 0
  let one = 0

  for(const value of values){
    if(value[i] === '0'){
      zero++
    } else {
      one++
    }
  }

  if(one > zero){
    gamma.push(1)
    epsilon.push(0)
  } else {
    gamma.push(0)
    epsilon.push(1)
  }
}

gamma = parseInt(gamma.join(''), 2)
epsilon = parseInt(epsilon.join(''), 2)

console.log(gamma * epsilon)
