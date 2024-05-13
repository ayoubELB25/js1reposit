alert('welcome to the 15th test')

console.log("1");
// SETIMEOUT METHOD
setTimeout(function () {
    console.log("this the set");
}, );
console.log("2");









//////////////////////////////////////// PROMISES ////////////////////////////////////////////////
//view m105 page:78
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
    setTimeout(() => reject("error"), 1000);
});



////////////////////// CALLBACK FUNCTION //////////////////////////
// EXAMPLE : .filer,.find,.pop...

///////////////////////////////////////////////////////////////
function affichage(somme){
    console.log("la somme est :",somme);
}

function somme(n1,n2,message){
    let s = n1 + n2
    message(s)
}
///////////////////////////////////////////// LISTES USING JSON /////////////////////////////////////////////////