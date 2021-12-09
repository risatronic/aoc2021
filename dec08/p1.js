const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
let values = input.split('\n');
values.pop();

values = values.map(x => x.split(' | ')[1]);
const uniqueCounts = [2, 3, 4, 7]
let total = 0

for(const value of values){
  const digits = value.split(' ');

  for(const digit of digits){
    if(uniqueCounts.includes(digit.length)){
      total++;
    }
  }
}

console.log(total);
