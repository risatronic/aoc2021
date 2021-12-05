const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
let values = input.split('\n');

values.pop();

const grid = [];

for(let y = 0; y < 1000; y++){
  grid[y] = [];
  for(let x = 0; x < 1000; x++){
    grid[y][x] = 0;
  }
}

for(let value of values){
  value = value.split(' -> ');
  let start = value[0].split(',').map(x => parseInt(x));
  let end = value[1].split(',').map(y => parseInt(y));
  
  if(start[0] === end[0]){
    const x = start[0];

    if(start[1] > end[1]){
      let temp = end[1];
      end[1] = start[1];
      start[1] = temp;
    }

    for(let y = start[1]; y <= end[1]; y++){
      grid[y][x]++;
    }
  } else if(start[1] === end[1]) {
    const y = start[1];

    if(start[0] > end[0]){
      let temp = end[0];
      end[0] = start[0];
      start[0] = temp;
    }

    for(let x = start[0]; x <= end[0]; x++){
      grid[y][x]++;
    }
  } else {
    let a = start[0];
    let b = start[1];
    let done = false;

    while(!done){
      if(a === end[0] && b === end[1]){
        done = true;
      }

      grid[b][a]++;

      if(start[0] > end[0]){
        a--;
      } else {
        a++;
      }
      if(start[1] > end[1]){
        b--;
      } else {
        b++;
      }
    }
  }
}

let count = 0;

for(const row of grid){
  for(const column of row){
    if(column > 1){
      count++;
    }
  }
}

console.log(count);