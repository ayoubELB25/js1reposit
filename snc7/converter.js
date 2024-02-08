// prompt
var userInput = prompt("Please enter your name:", "AYOUB");

if (userInput !== null) {
    alert("Hello, " + userInput + "!");
} else {
    alert("You clicked Cancel or closed the dialog box.");
}
// example of speed converter function 



function speed(){
    let kph
    kph = 160
    let mph
    return mph = kph*0.60934
}
console.log(speed());
// second example of speed converter function using promp
////
//////////////////////////////////////////////////////////////////////////////////////////
const firstObjectWithAyoub = stgr.find(obj => obj.prenom === "ayoub");
console.log(firstObjectWithAyoub);
/////
stgr.forEach(person => {
    if (person.age > 20) {
        console.log(`Notification: ${person.nom} ${person.prenom} has an age greater than 20.`);
    }
});