const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
let values = input.split('\n');
values.pop()

values = values.map(x => x.split(' | '));
let total = 0

for(const value of values){
  const charMap = {}
  let signals = value[0].split(' ')
  signals = signals.sort((a, b) => a.length > b.length)
  let digits = value[1].split(' ')

  charMap['1'] = signals[0].split('').sort().join('')
  charMap['7'] = signals[1].split('').sort().join('')
  charMap['4'] = signals[2].split('').sort().join('')
  charMap['8'] = signals[9].split('').sort().join('')

  signals.splice(0, 3)
  signals.pop()

  let topRight, topLeft
  let done = false

  while(!done){
    for(let signal of signals){
      signal = signal.split('').sort().join('')
      if(signal.length === 5){ // 2, 3, 5
        let valid = true //can be 3

        for(let char of charMap['1']){
          if(signal.includes(char) === false){
            valid = false
          }
        }

        if(valid){
          charMap['3'] = signal
        } else if(topRight && signal.includes(topRight)){
          charMap['2'] = signal
        } else if(topLeft && signal.includes(topLeft)) {
          charMap['5'] = signal
        }
      } else { // 6, 9, 0
        let valid = true

        for(let char of charMap['4']){ // 9 is the only 6 segment number including all of the lines of 4
          if(signal.includes(char) === false){
            valid = false
          }
        }

        if(valid){
          charMap['9'] = signal
          for(let char of signal){
            if(charMap['3'].includes(char) === false){
              topLeft = char
            }
          }
          //can nest these into the false check? or maybe make a function per number to check/skip if it exists?
        } else {
          valid = true
          for(let char of charMap['7']){
            if(signal.includes(char) === false){
              valid = false
            }
          }

          if(valid && signal.includes(topLeft)){
          charMap['0'] = signal
          } else {
            charMap['6'] = signal
            for(let char of charMap['8']){

              if(signal.includes(char) === false){
                topRight = char
              }
            }
        }
      }
    }

    if(charMap['0'] && charMap['2'] && charMap['3'] && charMap['5'] && charMap['6'] && charMap['9']){
      done = true
    }
  }
}
 let number = ''
  for(let digit of digits){
    digit = digit.split('').sort().join('')

    for(let num in charMap){
      if(charMap[num] === digit){
        number += num
      }
    }
  }

  let converted = parseInt(number)
  total += converted
  console.log(number, charMap, total)
}

console.log(total) //982158
