// function laugh(num) {
//     for (let i = num-1 ; i > 0 ; i--) {
//         console.log('ha')
//     }

//     return 'ha'
// }

// console.log(laugh(3))


/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length

// function makeLine(length) {
//     var line = "";
//     for (var j = 1; j <= length; j++) {
//         line += "* ";
//     }
//     return line + "\n";
// }

// function buildTriangle(length) {
//     for (let i = 1 ; i <= length ; i++) {
//         console.log(makeLine(i))
//     }
// }

// buildTriangle(5)

// your code goes here.  Make sure you call makeLine() in your own code.


// test your code by uncommenting the following line
//console.log(buildTriangle(10));


/*
 * Programming Quiz: Laugh (5-4)
 */


// var laugh = function(laugh) {
//     let msg = ''

//     for (let i = 0 ; i <= laugh ; i++) {
//         msg += 'ha'
//     }
//     return msg + '!'
// }
//     /* finish the function expression */

// console.log(laugh(10));

/*
 * Programming Quiz: Cry (5-5)
 */

// your code goes here

// let cry = () => {
//     return 'boohoo!'
// }

// console.log(cry())


/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions("happy", function laugh(num) {
    let msg = ''

    for (let i = 0 ; i <= num-1 ; i++) {
        msg += 'ha'
    }
    return msg + '!'
}); 