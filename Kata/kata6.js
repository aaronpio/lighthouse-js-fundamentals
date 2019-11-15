//-------------------- Kata 6 ---------------------------------------

const repeatNumbers = (arr) => {
  let str = ''
  for (x = 0 ; x < arr.length ; x++) {
    for (i = 0 ; i < arr[x][1] ; i++) {
      str += arr[x][0]
    }   
    if (x < arr.length-1) {
      str += ', '
    }
  }
  return str
}


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));