alert('welcome to the 9th test')


// Creation et supression d'un element DOM

console.log(document.title)
document.title = " test 9"
const clr = document.getElementsByTagName('html')
let txte = document.getElementsByTagName('html')
for (let i = 0; i < txte.length; i++) {
    txte[i].style.backgroundColor = 'black';
}

// let el1 = document.createElement('p');


const parent = document.querySelector('.section-1')

const enfant = document.createElement("h1")

enfant.innerHTML = "Learn JS"
enfant.style.backgroundColor = "yellow"

parent.append(enfant)

const el1 = document.createElement('p');
el1.innerHTML = "the 9th test";
el1.style.backgroundColor = 'black';
el1.style.color = 'yellow';
parent.append(el1)


// button 1
const btn1 = document.createElement('button')
console.log(btn1)
btn1.style.backgroundColor = "yellow";
btn1.style.height= "30px";
btn1.style.fontWeight= "600";
btn1.innerHTML = "greeting";
parent.append(btn1)
// button 2
const btn2 = document.createElement('button')
console.log(btn2)
btn2.style.backgroundColor = "yellow";
btn2.style.height= "30px";
btn2.style.fontWeight= "600";
btn2.innerHTML = "no greeting ";
parent.append(btn2) 

// button 3
const btn3 = document.createElement('button')
console.log(btn3)
btn3.style.backgroundColor = "yellow";
btn3.style.height= "30px";
btn3.style.fontWeight= "600";
btn3.innerHTML = " replacing ";
parent.append(btn3)




// prepand 
    // btn1.disabled = true
const el2 = document.createElement('h3');
console.log(el2)
el2.innerHTML = "welcome ";
el2.style.backgroundColor = 'black';
el2.style.color = 'yellow';


btn1.addEventListener("click", enbl = ()=> {
    parent.prepend(el2)
})
btn2.addEventListener("click" , dsb = () => {
    parent.removeChild(el2)                        // or remove()
})
// create new elements (HI,HELLO)
btn3.addEventListener("click", rplc = () => {
    parent.replaceChild(el2,el1)
})

const parent2 = document.getElementsByClassName('section-2')
console.log("section-2 is working")

const bttn1 = document.createElement('button')







// btn1.disabled = false
// le fonction click
// let fc1 = () => {
//     if (document.querySelector('.c-h1').addEventListener("click",fc1)) {
//         enbl()  
//     }
//     else  {
//         dsb()
//     }
// }
// document.querySelector('.c-h1').addEventListener("click",fc1)
    





// // Create an input element
// const numberInput = document.createElement('input'); 

// // Set the type to number
// numberInput.type = 'number';

// // Add other attributes 
// numberInput.min = 0;
// numberInput.max = 100;

// // Append the input to the DOM
// document.body.appendChild(numberInput);



const crt2 = document.createElement('div')