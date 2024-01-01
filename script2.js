// get attribute

// let div = document.querySelector("div")
// console.dir(div)
// console.log(div.innerHTML)

// let id = div.getAttribute("id")
// console.log("id is :",id)

// let para = document.querySelector("p")
// console.log(para)
// console.log(para.getAttribute("class"))

// set attribute

// let para = document.querySelector("p")
// console.log(para)
// console.log(para.setAttribute("class","newPara"))

//********************** Style **********************************

// let div = document.querySelector("div")
// console.log(div)
// div.style.backgroundColor = "green";
// div.style.font = "600px"

let newbtn = document.createElement("button")
newbtn.innerText = "Submit"
console.log(newbtn)

let p = document.querySelector("p")
p.append(newbtn)


p.prepend(newbtn)
p.before(newbtn)
p.after(newbtn) 


let newHeading = document.createElement("hi")
newHeading.innerHTML = "<i> Hi My name is Vikash Kumar";

document.querySelector("body").prepend(newHeading)

newHeading.remove()

// APpend child and remove child..

let btn = document.createElement("btn");
btn.innerText = "Click Me";
btn.style.backgroundColor = "red";
btn.style.color = "White";

document.querySelector("body").prepend(btn);

// 

let h1 = document.querySelector("h1")
console.dir(h1)

console.log(h1.getAttribute("class"))

// console.log(h1.setAttribute("class","newClass"))
h1.classList.add("newClass");
h1.classList.remove("newClass")