

// let num = 99

// while (num > 0) {
    
//     let line = `${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num-1} bottles of juice on the wall!`

//     let lineDouble = `${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num-1} bottle of juice on the wall!`

//     let lineSingular = `${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around... ${num-1} bottles of juice on the wall!`

//     if (num > 2) {
//         console.log(line)
//     } else if (num === 2) {
//         console.log(lineDouble)
//     } else if (num === 1) {
//         console.log(lineSingular)
//     }

//     num = num-1
  
// }

// for (var x = 0; x < 5; x = x + 1) {
//     for (var y = 0; y < 3; y = y + 1) {
//       console.log(x + "," + y);
//     }
//   }


// for (let x = 9 ; x >= 1 ; x--) {
//     console.log("hello " + x)
// }
// ----------------------------------------------------
// let solution = 1

// for (let i = 12 ; i > 0 ; i--) {
    
//     solution *= i
// }

// console.log(solution)

//-----------------------------------------------------



for (let row = 0 ; row <= 25 ; row++) {

    for (let seat = 0 ; seat <= 99 ; seat++) {
        console.log(`${row}-${seat}`)
    }

}