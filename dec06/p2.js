const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
const values = input.split(',').map(x => parseInt(x))

const days = 256;
const ages = {};

for(let i = 0; i < 9; i++){
  ages[i] = 0;
}

for(const num of values){
  ages[num]++;
}

for(let i = 0; i < days; i++){
  let temp = ages[0];
  ages[0] = ages[1];
  ages[1] = ages[2];
  ages[2] = ages[3];
  ages[3] = ages[4];
  ages[4] = ages[5];
  ages[5] = ages[6];
  ages[6] = (ages[7] + temp);
  ages[7] = ages[8];
  ages[8] = temp;
}

let total = 0;

for(const age in ages){
  total += ages[age];
}

console.log(total);
