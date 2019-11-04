
let lastIndexOf = (arr, el) => {

    let index = -1

    for (i = 0 ; i < arr.length ; i++) {
        if (arr[i] === el) {
            index = i
        }
    }
    return index
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1))