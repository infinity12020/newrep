let inc = document.querySelector(".first") 
let dec = document.querySelector(".third")
let reset = document.querySelector(".second")
let text = document.querySelector(".text")
let rdnm = document.querySelector("fourth")

let ten = 10

let zero = 0

let min = 1;
let max = 50;


text.innerHTML = ten

inc.onclick = () => {


    text.innerHTML = ten++

}




dec.onclick = () => {


    text.innerHTML = ten--

}

reset.onclick = ( ) => {


    text.innerHTML = zero

}


rdnm.onclick = () => {


text.innerHTML = Math.floor(Math.random() * 50 );

}