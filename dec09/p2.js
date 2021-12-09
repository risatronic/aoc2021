const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
let values = input.split('\n');
values = values.map(x => x.split(''));
values.pop();

const lowPoints = [];

for(let i = 0; i < values.length; i++){
  for(let j = 0; j < values[0].length; j++){
    const current = parseInt(values[i][j]);
    values[i][j] = current;

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

    lowPoints.push([i, j]);
  }
}

function recursiveBasins(i, j){
  let currentBasinSize = 1;

  if (j < 0){
    return 0;
  }
  if (i < 0){
    return 0;
  }
  if (j > values[0].length - 1){
    return 0;
  }
  if (i > values.length - 1){
    return 0;
  }
  if (values[i][j] === 9){
    return 0;
  }

  values[i][j] = 9;

  currentBasinSize += recursiveBasins(i, j - 1); //left
  currentBasinSize += recursiveBasins(i, j + 1); //right
  currentBasinSize += recursiveBasins(i - 1, j); //up
  currentBasinSize += recursiveBasins(i + 1, j); //down
  
  return currentBasinSize;
}

const sizes = [];

for(const point of lowPoints){
  const size = recursiveBasins(point[0], point[1]);
  sizes.push(size);
}

sizes.sort((a, b) => b - a)

const largestProduct = sizes[0] * sizes[1] * sizes[2]

console.log(largestProduct)
