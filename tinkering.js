// S	18"	28"	8.13"
// M	20"	29"	8.38"
// L	22"	30"	8.63"
// XL	24"	31"	8.88"
// 2XL	26"	33"	9.63"
// 3XL	28"	34"	10.13"


// var shirtWidth = 23;
// var shirtLength = 30;
// var shirtSleeve = 8.71;

// // Write your if/else code here

// if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
//     console.log("S")
// }

// if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
//     console.log("M")
// }

// if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
//     console.log("L")
// }

// if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 8.88 && shirtSleeve < 9.68)) {
//     console.log("Xl")
// }

// if ((shirtWidth >= 26) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
//     console.log("2XL")
// }

// if ((shirtWidth >= 28 && shirtWidth < 34) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
//     console.log("3XL")
// }


change the value of `education` to test your code

var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

// your code goes here

// no high school diploma earned an average of $25,636/year,
// a high school diploma earned an average of $35,256/year,
// an Associate's degree earned an average of $41,496/year,
// a Bachelor's degree earned an average of $59,124/year,
// a Master's degree earned an average of $69,732/year,
// a Professional degree earned an average of $89,960/year,
// and a Doctoral degree earned an average of $84,396/year.

switch (education) {
    case 'no high school diploma':
        salary = '$25,636'
        break
    
    case 'a high school diploma':
        salary = '$35,256'
        break
    
    case "an Associate's degree":
        salary = '$41,496'
        break
        
    case" a Bachelor's degree":
        salary = '$59,124'
        break
        
    case "a Master's degree":
        salary = '$69,732'
        break
        
    case "a Professional degree":
        salary = '$89,960'
        break
        
    case "a Doctoral degree":
        salary = '$84,396'
        break
}

console.log(`In 2015, a person with ${education} earned an average of ${salary}/year.`)