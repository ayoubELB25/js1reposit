console.log('HELLO WORLD!!!')
alert('NOT A DANGER')
console.log('check danger')
document.title = "JS first seance"
// this is a comment 
/*
and this is also a comment !!!
*/
// les fonctions :
function greet(name){
    console.log("HIIIIII " + name + " !!!!")
}
greet("AYOUB")

function somme(n1,n2){
    return Z = n1 + n2/10

}

// console.log( somme(5,10))
console.log( "Z = " + somme(5,10) )

// declaration des variables 
// const PI = 3.14
// function INSC(){
//     let nom;
//     let prenom;
//     let age;
//     nom = "EL-BATOULI"
//     prenom = "AYOUB"
//     age = 19

//     if (age > 17){
//         var statut;
//         statut = "HE CAN DRIVE!!"
//     }
//     console.log(nom,prenom)
//     console.log(statut)
// }

// declaration des variables
const PI = 3.14;

function INSC() {
    let nom;
    let prenom;
    let age;
    
    nom = "EL-BATOULI";
    prenom = "AYOUB";
    age = 19;

    let statut = ""; // Initialize statut outside the if block

    if (age > 17) {
        statut = "HE CAN DRIVE!!";
    }

    console.log(nom, prenom);

    if (statut !== "") {
        console.log(statut); // Log statut only if it's not an empty string
    }
}

// Calling the function
INSC();

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
console.log(rslt)