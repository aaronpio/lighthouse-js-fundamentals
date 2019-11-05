

// const concat = (arr1, arr2) => {
//     arr2.forEach((el) => {
//         arr1.push(el)
       
//     })
//     return arr1
// }


// console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]))


//---------------------------------------------------------


const merge = (arr1, arr2) => {
    arr2.forEach((el) => {
        arr1.push(el)
       
    })
    return arr1.sort()
}





console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]))