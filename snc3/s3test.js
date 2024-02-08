// download GIT software and learn it as well

alert('this the third test ')
console.log("hello")

console.log(typeof(5))
console.log(typeof(" to be or not to be "))
console.log(typeof(true))
console.log(typeof(undefined))

//passage par valeur
let a;
let b;
a=5;
b=a;
b=6;

console.log(a)
console.log(b)
console.log(b/a*100)

// les types d'objets de base

let lst = [1,2,3]
let c_lst = lst

c_lst.push(5)
console.log(lst)
console.log(c_lst)

let stg = {
    id : 2505,
    nom:"EL-BATOULI",
    prenom:"AYOUB"
}
let c_stg = stg
console.log(c_stg)

// copie

lst2 = [].concat(lst)

// spread operator 

lst3 = [...lst]
stg3 = {...stg}
stg3.branche = "DD"
Object.assign(stg3,stg)
stg3.annee = "2024"


lst2.push(9)
console.log(lst)
console.log(lst2)
console.log(lst3)
console.log(stg)
console.log(stg3)



