const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
let values = input.split('\n');

values = values.map(x => x.split(' '));

let horizontal = 0;
let depth = 0;
let aim = 0;

for(const value of values){
  const direction = value[0];
  const distance = parseInt(value[1]);

  switch(direction){
    case 'forward':
      horizontal += distance;
      depth += (aim * distance)
      break;
    case 'up':
      aim -= distance;
      break;
    case 'down':
      aim += distance;
      break;
  }
}

console.log(horizontal * depth);