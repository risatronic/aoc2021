const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
let values = input.split('\n');

const common = {}
let o2 = [...values]
let co2 = [...values]
let digit = 0
let target

while(o2.length > 1){
  common[digit] = {zero: 0, one: 0}
  for(const num of o2){
    if(num[digit] == '0'){
      common[digit].zero++
    } else {
      common[digit].one++
    }
   }

  if(common[digit].zero > common[digit].one){
    target = '0'
  } else {
    target = '1'
  }

  o2 = o2.filter(d => d[digit] === target)
  digit++
}

digit = 0

while(co2.length > 1){
  common[digit] = {zero: 0, one: 0}

  for(const num of co2){
    if(num[digit] == '0'){
      common[digit].zero++
    } else {
      common[digit].one++
    }
   }

  if(common[digit].zero > common[digit].one){
    target = '1'
  } else {
    target = '0'
  }

  co2 = co2.filter(d => d[digit] === target)
  digit++
}

o2 = parseInt(o2[0], 2)
co2 = parseInt(co2[0], 2)

console.log(o2 * co2) // 3145 * 1935 = 6085575
