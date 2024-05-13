// alert('welcome to the 14th test')
document.title = 'Objects test'
document.body.style.backgroundColor = 'black'
document.body.style.color = 'white'
document.body.style.fontFamily = 'Arial'

// const stagiaire = {
//     id:1610,
//     firstname: 'AYOUB',
//     lastname:'EL-BATOULI',
//     age: 19,
//     city: 'CASABLANCA',
//     branch:"DEV"}



// function stg (v_id, v_firstname, v_lastname, v_age, v_city, v_branch){
//     this.id = v_id
//     this.firstname = v_firstname
//     this.lastname = v_lastname
//     this.age = v_age
//     this.city = v_city
//     this.branch = v_branch
// }

// const stagiaire1 = new stagiaire(1610, 'AYOUB', 'EL-BATOULI', 19, 'CASABLANCA', 'DEV');
// console.log(stagiaire1);

// achat (id,artice,prix,tva)



////////////////////////////////////////////// NOT A COMMENT ////////////////////////////////////////////////////////////////



// const achat = {
//     id: '1612', 
//     article: 'PC',
//     prix: 1000,
//     qte:1,
//     tva: 20,
//     calculer: function(){
//         return this.prix *qte* (this.tva/100)
//     }
//     }
    
// console.log(achat);


// function Achat(id, article, prix, qte, tva) {    // whe use capitalize letter to show that this is a class
//     this.id = id;
// //keys   = //values
//     this.article = article;
//     this.prix = prix;
//     this.qte = qte;
//     this.tva = tva;
//     this.calculer = function() {
//         return this.prix * this.qte * (this.tva / 100);
//     };
// }

// const achat1 = new Achat('1615', 'mobile', 17000, 1, 20);
// const achat2 = new Achat('1616', 'smart watch', 600, 3, 13);

// console.log(achat1);
// console.log(achat1.calculer());
// console.log(achat2);
// console.log(achat2.calculer());

////////////////////////////////////////////// NOT A COMMENT ////////////////////////////////////////////////////////////////


    
class Achat{
    constructor(id, article, prix, qte, tva) {
        this.id = id;
        this.article = article;
        this.prix = prix;
        this.qte = qte;
        this.tva = tva;
    }                                                                    // constructors and methode are diffrent here in terms of syntax
    calculerTTC() {
        const Vtva = 20/100
        let total = this.prix * this.qte ;
        let totalTTC = total + total * Vtva;
        return totalTTC;
    }
} 

const achat3 = new Achat('1619', 'mouse', 70, 5, 20);
console.log(achat3);
console.log(achat3.calculerTTC());


// for modification 
achat3.article = 'keyboard';
console.log(achat3);

achat3.brand="lenovo"
console.log(achat3);

////////////////////////////////////// NOT A COMMENT ///////////////////////////////////////////////////////////

let brands = "lenovo"
//console.log(brands.length);
// console.log(brands.charAt(1)); // starting from 0
//console.log(brands.substring(0,3));
//console.log(brands.toLowerCase());
//console.log(brands.toUpperCase());
// console.log(brands.split(''));

let letter = "this is a letter"
// console.log(letter.split(''));
// console.log(letter.split(' '));
console.log(brands.startsWith("l"))
console.log(brands.endsWith("o"))



// m105 document , page:104

////////////////////////////////////// NOT A COMMENT ///////////////////////////////////////////////////////////


let stgr = [{id:1,nom:'A',note:12},
            {id:1,nom:'B',note:15},
            {id:1,nom:'C',note:9},    ];
            


nts = stgr.map(function(itemValue){
    return itemValue.note
})
let maxnt = Math.max(...nts);
let stgr1 = stgr.filter(function(itemValue){
    return    itemValue.note === maxnt
})

console.log(stgr)
console.log(stgr1)

//////////////////// MATH /////////////////////////////////////
console.log(Math.max(...nts))
console.log("RANDOM Number :")
console.log(Math.floor(Math.random()*20)+1)

































///////////////////////////////////////////////////

document.querySelector('#btn').addEventListener("click", function(e) {
    e.preventDefault();

    let vid = document.getElementById('pid');
    let vprice = document.getElementById('price');
    let vqte = document.getElementById('pqte');
    let vtva
    // ID part
    if (vid.value.length === 4 && vprice.value > 0 && vqte.value > 0) {
        vid.style.borderColor = 'green';
        vprice.style.borderColor = 'green';
        vqte.style.borderColor = 'green';
    }
    if (vid.value.length === 0 ) {
        vid.style.borderColor = 'red';
        vprice.style.borderColor = 'red';
        vqte.style.borderColor = 'red';

    }
    // price part
    if(vprice){}
    // focntion 
    



});

////////////////////////////////////////////////////////