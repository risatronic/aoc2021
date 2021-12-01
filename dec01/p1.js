const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
let values = input.split('\n');
let larger = 0;

values = values.map(x => parseInt(x, 10));

for(let i = 1; i < values.length; i++) {
  if(values[i] > values[i - 1]){
    larger++;
  }
}

console.log(larger);