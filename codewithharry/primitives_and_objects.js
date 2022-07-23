// Primitives 
// nn bb ss u
let a = null;
let b = 1234;
let c = true;
let d = BigInt("1234");
let e = "Hello there";
let f = Symbol("Hello World");
let g = undefined;

console.log(a,b,c,d,e,f,g)

// Non-Primitive - Objects in Javascript

let family = {
    "father":"Bal Ram Joshi",
    "mother":"Padma Devi Joshi",
    "sisters": {
        "bigSister":"Sajana Joshi",
        "smallSister":"Anisha Joshi"
    },
    "brother":"Anish Joshi"
}
console.log(family.father)
console.log(family["father"])

console.log(family["sisters"]["bigSister"])
console.log(family.sisters.bigSister)