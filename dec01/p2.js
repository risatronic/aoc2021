const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
let values = input.split('\n');
let larger = 0;

values = values.map(x => parseInt(x, 10));

let sum = values[0] + values[1] + values[2];

for(let i = 1; i < values.length; i++) {
  const newSum = values[i] + values[i + 1] + values[i + 2];

  if(newSum > sum){
    larger++;
  }
  
  sum = newSum;
}

console.log(larger);