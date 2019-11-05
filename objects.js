// /*
//  * Programming Quiz: Umbrella (7-1)
//  */

// var umbrella = {
//     color: "pink",
//     isOpen: true,
//     open: function() {
//         if (umbrella.isOpen === true) {
//             return "The umbrella is already opened!";
//         } else {
//             umbrella.isOpen = true;
//             return "Julia opens the umbrella!";
//         }
//     },
//     // your code goes here
//     close: function() {
//         if (umbrella.isOpen === false) {
//             return "The umbrella is already closed!"
//         } else {
//             umbrella.isOpen = false
//             return "Julia closes the umbrella!"
//         }
//     }
// };

// console.log(umbrella.isOpen)


// var savingsAccount = {
//     balance: 1000,
//     interestRatePercent: 1,
//     deposit: function addMoney(amount) {
//         if (amount > 0) {
//             savingsAccount.balance += amount;
//         }
//     },
//     withdraw: function removeMoney(amount) {
//         var verifyBalance = savingsAccount.balance - amount;
//         if (amount > 0 && verifyBalance >= 0) {
//             savingsAccount.balance -= amount;
//         }
//     },
//     // your code goes here
//     printAccountSummary: () => {
//         return`Welcome!\nYour balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%.`
//     }
// };

// console.log(savingsAccount.printAccountSummary());

// ---------------------------------------------------------------

// let facebookProfile = {
//     name: 'Aaron',
//     friends: 14,
//     messages: ['hello', 'bye'],
//     postMessage: (message) => {
//         facebookProfile.messages.push(message)
//     },
//     deleteMessage: (index) => {
//         facebookProfile.messages.splice(index, 1)
//     },
//     addFriend: () => {
//         facebookProfile.friends++
//     },
//     removeFriend: () => {
//         facebookProfile.friends--
//     }
// }

//--------------------------------------------------------------

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here

donuts.forEach((el) => {
    let msg = `${el.type} donuts cost $${el.cost} each`
    console.log(msg)
})

