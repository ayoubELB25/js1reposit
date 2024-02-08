// alert('hello')
function greet(){
    alert("hello again")
    console.log("hello again and agian")
}



// function declaration

greet()
// function expression
// let fct 
// fct = somme(a,b)
//     return a + b

//test
let somme=function(a,b){
    return a + b
}

let sm = somme(5,9)
console.log(sm)










// les fonction fichiers(arow fonction)
let g = () => console.log(" again !! hello mate")

/*let nomcomplet = (nom, prenom) => {
    let fullname = nom + " " + prenom
    return fullname;
}
console.log(nomcomplet("ayoub","el-batouli"))*/
// les constants
const variabl = () => {
    return "somthing"
}
console.log(variabl())
// les expressions lambdas

let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
// map ne modifie pas le tableau et ne retourne pas de valeur mais retourne un nouveau tableau
jours.map((item) => {
    // return console.log(item)
    if (item === "jeudi" ){
        item += " " + "est un jour ferier"
    }
    return console.log(item) 

})
console.log(jours)

// les constants 
const stgr = [
    { nom: "el-batouli", prenom: "ayoub", age: 19 },
    { nom: "nickname1", prenom: "name1", age: 20 },
    { nom: "nickname2", prenom: "name2", age: 19 },
    { nom: "nickname3", prenom: "name3", age: 18 },
    { nom: "nickname4", prenom: "name4", age: 19 },
    { nom: "nickname5", prenom: "name5", age: 17 },
    { nom: "nickname6", prenom: "name6", age: 21 },
    { nom: "nickname7", prenom: "name7", age: 24 },
];
/*stgr.map((object) => {
    fllnm = object["nom"] + " " + object["prenom"];
    return fllnm
})*/








// let p
// function nomETprenom(p){
//     return p.nom + " " + p.prenom
// }
// console.log(stgr.map(nomETprenom))



// function nomETprenom(personne) {
//     return personne.nom + " " + personne.prenom;
// }

// console.log(stgr.map(nomETprenom));
console.log(" FIRST METHODE")
// [a,b,c]
let nomage;
nomage = stgr.map((item,index,arrstg) => {
    // console.log(item)
    // console.log(index)
    // console.log(arrstg)
    let st;
    st = {...item, branche : 'DD' , id : index + 1  } // { nom: "el-batouli", prenom: "ayoub", age: 19 }
    ///
    if (item.age > 20) {
        st.remarque = "older than 20"}
    else if (item.age < 20) {
        st.remarque = "younger than 20"}

    return st;

})
console.log(nomage)







