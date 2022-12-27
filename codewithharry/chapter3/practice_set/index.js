/* Write a program to print the marks of a students
 in an object using for loop*/
const object = {
    harry: 98,
    rohan: 70,
    aakash: 7
}
let keys = Object.keys(object)

for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]}: ${object[keys[i]]}`)
}
// Using for of loop
for (let key of keys) {
    console.log(`${key}:${object[key]}`)
}
// Write a program to print "try again" until the users enter the correct numbers

function findNumber() {
    let secretNumber = 12
    let input = Number(prompt("Enter any number"))
    while (input !== secretNumber) {
        console.log("Try again")
        let input = Number(prompt("Enter any number"))
        if (input === secretNumber) {
            break
        }
    }
    console.log("Number Matched")
}
// Write a function to find the mean of 5 numbers
function computeMean() {
    let sum = 0
    for (let i = 0; i < 5; i++) {
        let subject = Number(prompt(`Enter the marks of Subject:${i + 1}`))
        sum += subject
    }

    console.log(`The mean of 5 Subject Marks is ${Math.floor(sum / 5)}`)
}

