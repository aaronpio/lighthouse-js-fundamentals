
const calculateChange = (total, cash) => {
    let changeLeft = cash - total
    let num 
    
    let key = ['twentyDollar', 'tenDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime',  'nickel', 'penny']

    const value = [2000, 1000, 200, 100, 25, 10, 5, 1]

    let numOfDenom = []

    let changeOut = {}

    for (i = 0 ; i < 8 ; i++) {
        num = (Math.floor(changeLeft/value[i]))
        changeLeft = (changeLeft-value[i]*num)
        numOfDenom.push(num)
    }

    for (x = 0 ; x < 8 ; x++) {
        if (numOfDenom[x] > 0) {
            changeOut[key[x]] = numOfDenom[x]
        }
    }
    return changeOut
}


// console.log(calculateChange(1787, 2000));
// console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));