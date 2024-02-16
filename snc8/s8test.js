// getElementById  //

let ttl = document.getElementById('ttl');

ttl.style.color = 'red'; 
ttl.style.fontSize = '50px';    
ttl.style.fontWeight = 'bold';
ttl.style.textAlign = 'center'; 
ttl.style.textTransform = 'uppercase';  
ttl.style.margin = '0';  
ttl.style.padding = '0'; 
ttl.style.borderRadius = '20px';    
ttl.style.backgroundColor = 'yellow';   
ttl.style.color = 'black';      

// getElementByClassName  //

console.log(document.getElementsByClassName("txte")); 
let txte = document.getElementsByClassName('txte')
for (let i = 0; i < txte.length; i++) {
    txte[i].style.color = 'yellow';
}
txte[0].style.color = 'yellow'; // or use the (for) methode 

// getElementByTagName  //

console.log(document.getElementsByTagName("p")); 
tg = document.getElementsByTagName('p');   
// to apply the style on the all elements
for (let y=0;y < tg.length-1; y++){
    tg[y].style.color = 'blue';
} 
// to choose wich one to apply the style on 
tg[4].style.color = 'red'  // it only choose one  // the p number 4 was added because the [] number starts from 0 // and it could only add 1 element

// document title //
console.log(document.title)
document.title="still JavaScript test 8" 




