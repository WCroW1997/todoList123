let str = prompt('input str:')

let res = ""
let len = str.length
for (let index = 0; index < len; index++) {
   res += str[len-1-index]
    
}

console.log(str.split('').reverse().join(''))

