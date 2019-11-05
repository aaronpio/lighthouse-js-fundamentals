

const loopyLighthouse = (range, multiples, words) => {

    let multOne = multiples[0]
    let multTwo = multiples[1]
    let wordOne = words[0]
    let wordTwo = words[1]

    for (let num = range[0] ; num <= range[1] ; num++) {

        if (num % multOne === 0 && num % multTwo !== 0) {
            console.log(wordOne)
        } else if (num % multTwo === 0 && num % multOne !== 0) {
            console.log(wordTwo)
        } else if (num % multOne === 0 && num % multOne === 0) {
            console.log(wordOne+wordTwo)
        } else if (num % multOne !== 0 && num % multTwo !== 0) {
            console.log(num)
        }
    
    }
 
}

