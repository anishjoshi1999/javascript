// DOM Manipulation

// GetElementById()
const title = document.getElementById('main-heading');
console.log(title)
// GetElementsByClassName
const listItem = document.getElementsByClassName('list-item');
console.log(listItem)

// getElementsByTagName
const listItems = document.getElementsByTagName('li');
console.log(listItems)

// querySelector
// query selector only selects first element of the dom objects
const container = document.querySelector('div');
console.log(container);

// querySelectorAll
const containers = document.querySelectorAll('div');
console.log(containers)


// Styling of an Element

// const title = document.querySelector('#main-heading')
// Inline styling 
// Suitable for one elements
title.style.color = "red";

// const listItems = document.querySelectorAll(".list-item")
// css property is written in camelCase in case of javascript

listItems.style.fontSize = "2rem"
// Not gonna work

// We have to loop through each elements of the dom for css effect
for(let i = 0; i < listItems.length;i++) {
    listItems[i].style.fontSize = "2rem"
}

// Creating Elements
const ul = document.querySelector('ul');
const li = document.createElement('li');
// Adding Elements
ul.append(li)
// Modifying the Text
const firstListItem = document.querySelector(".list-item");
// Recommended
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
// Danger
console.log(firstListItem.innerHTML);
li.innerText = "X-men";

// Modifying attributes and Classes

li.setAttribute("class","list-item");

// Removing Attributes

li.removeAttribute("class")

// Access Attributes
const title = document.querySelector("#main-heading")

console.log(title.getAttribute("id"))
// Adding class named "list-item" on li dom
li.classList.add("list-item")
// Removing class named "listItem" on li dom
li.classList.remove("list-item")

// To check whether a classList contain inside dom elements
console.log(li.classList.contains("list-item"))

// Remove elements
li.remove()
