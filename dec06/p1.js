const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
const values = input.split(',').map(x => parseInt(x))

const days = 80;
let count = 0;

for(let i = 0; i < days; i++){
  for(let j = 0; j < values.length; j++){
    if(values[j] === 0){
      values[j] = 6;
      count++;
    } else {
      values[j]--;
    }
  }
  
  for(let i = 0; i < count; i++){
    values.push(8);
  }

  count = 0;
}

console.log(values.length)
