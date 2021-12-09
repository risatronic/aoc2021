const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
let values = input.split('\n');
values = values.map(x => x.split(''));
values.pop();

let totalRisk = 0;

for(let i = 0; i < values.length; i++){
  for(let j = 0; j < values[0].length; j++){
    const current = parseInt(values[i][j]);

    if(values[i][j-1]){
      const left = parseInt(values[i][j-1]);
      if(current >= left){
        continue;
      }
    }

    if(values[i][j+1]){
      const right = parseInt(values[i][j+1]);
      if(current >= right){
        continue;
      }
    }

    if(values[i-1]){
      const up = parseInt(values[i-1][j]);
      if(current >= up){
        continue;
      }
    }

    if(values[i+1]){
      const down = parseInt(values[i+1][j]);
      if(current >= down){
        continue;
      }
    }

    totalRisk += (current + 1);
  }
}

console.log(totalRisk);
