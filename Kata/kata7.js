
//----------------------- Kata 7 ------------------------------------

const camelCase = (input) => {
  let x
  let txt = input.split('')
  
  for (i = 0 ; i < txt.length ; i++) {
    if (txt[i-1] === ' ') {
      x = txt[i].toUpperCase()
      txt.splice(i-1, 2, x)   
    }
  }
  return txt.join('')
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));