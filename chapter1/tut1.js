// Create a variable type string and try to add a number to it 
let a = "Hello there";
let b = 12;
let c = a + b;
console.log(c)
// Use typeof operator to find the datatype of the string in last question
console.log(typeof(c)) 
// Create a const object in javascript can you change it to hold a number later ?
const family = {
    "Father":"Balram Joshi",
    "Mother":"Padma Devi Joshi"
}
family["Number"] = 1234;
console.log(family)
// Try to add a new key to the const object in problem 3 were you able to do it ?
// Yes we are able to add new key value into const object

// Write a Javascript program to create a word meaning dictionary of 5 words.
const  dictionary_book = {
    "name":"a word or set of words by which a person or thing is known, addressed, or referred to.",
    "study":"the devotion of time and attention to gaining knowledge of an academic subject, especially by means of books.",
    "family":"a group of one or more parents and their children living together as a unit.",
    "technology":"the application of scientific knowledge for practical purposes, especially in industry.",
    "house":"a building for human habitation, especially one that consists of a ground floor and one or more upper storeys."
}
console.log(dictionary_book.name)
console.log(dictionary_book.study)