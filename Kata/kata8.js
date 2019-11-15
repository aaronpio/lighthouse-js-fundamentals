//----------------------- Kata 8 ------------------------------------


const multiplicationTable = (maxValue) => {
    let mult = ''
    for (row = 1 ; row <= maxValue ; row++) {
        for (col = 1 ; col <= maxValue ; col++) {
            mult += ' ' + row*col
        }
        console.log(mult)
        mult = ''
    }
    return ''
}

testing
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));