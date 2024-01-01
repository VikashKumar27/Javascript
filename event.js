// Mouse events
// keyboard events
// form events
// print events & many more

let btn1  = document.querySelector("#btn1")
// btn1.onclick = (event) =>{
//     console.log(event);
//     console.log(event.type)
    
// 

btn1.addEventListener("click",(evt) =>{
    console.log("addevent listner starts..")
    console.log(evt.type)
})

let btn2  = document.querySelector("#btn2")
btn2.ondblclick = () =>{
    console.log("successfully submitted 2 timess");
}

let div  = document.querySelector(".container")
div.onmouseover = () =>{
    console.log('you are inside box');
}
