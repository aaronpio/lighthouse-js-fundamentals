//-------------------- Kata 5 -------------------------------------

const urlEncode = (text) => {
  let str = text.replace(/ /g, '%20')
  return str
}

const urlEncode = (text) => {
  let str = ''
  for (i = 0 ; i < text.length ; i++) {
    if (text[i] === ' ') {
      str += '%20'
    } else {
      str += text[i]
    }
  }
  return str
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));