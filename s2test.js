// title

document.title = " JS second test  "

let text1 = "OFPPT";
text1 += "";
let text2 = " en force";
let text3 = text1 + text2;
console.log(text3)

// Output : text1 = "OFPPT en force "

let x = 1 + 1;
let y = "5" + 1;

console.log(x)
console.log(y)  

// Output

let a = 5
let b = '5'

if (a == b) {
    rslt="bro this is meth"
}
console.log(a)
console.log(rslt)

//
rslt = "the result  "
let c = 1;
let d = "1";
// Type ou valeur différente  ==> !==
let e1 =c!==d;
console.log(rslt + e1)
// Différent de (n’est pas égal à) ==> != 
let e2 = c!=d;
console.log(rslt + e2)

// les operateur logique  " ET"

let a1 = 4
let a2 = 5
let a3 = a1&&a2

console.log(rslt + " of a3 is  " + a3)

// les operateur logique  " OU"


let sbjct = "truck" //choose the type of vehicul(sbjct)
let car_speed = 118
let truck_speed = 101

if (car_speed<=120 || truck_speed<=100 && sbjct == " car" || sbjct=="truck" ) {
    console.log( "the " + sbjct + " is respecting the speed limit ")
    
}else { 
    console.log( " the" + sbjct + "is not respecting the speed")

}

// light/Dark theme  buttons  //////////////////////////////////////////////////////////////////////////////////////////////////////


/*
// Define dark and light theme classes
const darkTheme = 'dark-theme';
const lightTheme = 'light-theme';

// Check for dark theme preference 
const currentTheme = localStorage.getItem('theme') || darkTheme;

// Select body element
const body = document.body;

// Apply or remove dark/light class on body
function toggleTheme() {
  // Remove dark/light class if it exists
  body.classList.remove(darkTheme, lightTheme);

  // Check which theme is active
  if(body.classList.contains(darkTheme)) {
    // Switch to light theme
    body.classList.replace(darkTheme, lightTheme);
    localStorage.setItem('theme', 'light'); 
  } else {
    // Switch to dark theme  
    body.classList.replace(lightTheme, darkTheme);
    localStorage.setItem('theme', 'dark');
  }
}

// Toggle theme when button is clicked
const toggleButton = document.getElementById('toggle');
toggleButton.addEventListener('click', toggleTheme);

// Set initial theme on load
body.classList.add(currentTheme);

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







