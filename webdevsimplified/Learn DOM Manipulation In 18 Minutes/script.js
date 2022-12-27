const body = document.body
// Adding Elements
// body.append("Hello World"," Bye")
/* body.appendChild()
while using append you can append string
while in appendChild you cannot
In appendChild you can only append html elements*/
// Creating Element and modfiying element

// const div = document.createElement('div')
// div.innerText = "Hello World"
// div.textContent = 'Hello World 2'

// Difference between innerText and textContent

// body.append(div)

// const div = document.querySelector('div')
// console.log(div.textContent)
// console.log(div.innerHTML)
// console.log(div.innerText)


// const div = document.createElement('div')
// // div.textContent = "<strong>Hello World 2</strong>"
// // div.innerText = "<strong>Hello World 2</strong>"
// // div.innerHTML= "<strong>Hello World 2</strong>"
// const strong = document.createElement('strong')
// strong.innerText = "Hello World 2"
// body.append(strong)
// // body.append(div)


const div = document.querySelector('div')
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector('#bye')

// spanBye.remove()
// div.append(spanBye)
// div.removeChild(spanHi)

console.log(spanHi.getAttribute('id'))
console.log(spanHi.setAttribute("id", "sdafdsaf"))
console.log(spanHi.getAttribute('id'))
