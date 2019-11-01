

// const isOdd = (num) => {
//     if (num % 2 === 0) {
//         return false
//     } else {
//         return true
//     }
// }

// console.log("4 is odd: " + isOdd(4))


// const ageCalculator = (name, yearOfBirth, currentYear) => {
//     const age = currentYear - yearOfBirth
//     return `${name} is ${age} years old.`
// }

// const howManyHundreds = (num) => {
//     const howMany = Math.floor(num / 100)
//     return howMany
// }

// console.log(howManyHundreds(1000), "=?", 10);

let calculateRectangleArea = (length, width) => {
    if (length < 0 || width < 0) { 
        return undefined 
    }

    const area = length * width
    return area
}

let calculateTriangleArea = (base, height) => {
    if (base < 0 || height < 0) { 
        return undefined 
    }
    const area = base * height / 2
    return area
}

let calculateCircleArea = (radius) => {
    if (radius < 0) { 
        return undefined 
    }
    const area = Math.PI * Math.pow(radius, 2)
    return area
}


