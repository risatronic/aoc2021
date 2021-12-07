const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
let values = input.split(',').map(x => parseInt(x));

let efficient, index, totalFuel;

for(let i = 0; i < values.length; i++){
  totalFuel = 0;

  for(let j = 0; j < values.length; j++){
    if(j !== i){
      const diff = Math.abs(values[i] - values[j]);
      totalFuel += diff;
    }
  }

  if(i === 0 || totalFuel < efficient){
    efficient = totalFuel;
    index = i;
  }
}

console.log(efficient, index);
