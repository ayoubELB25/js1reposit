// conditions

// let flr = ["DD","ID","GD","MEC"] ;



// if (flr == "DD") {
//     console.log("devevelopement digital ");
// }
// else if (flr == "ID") {
// console.log("infrastructur digital")
// }
// else if (flr == "GD") {
// console.log("graphic design")
// }
// else if (flr = "MEC"){
//     console.log("mechanic")
// }

// or 
let flr;
let fullname;
flr = "DD"

switch (flr) {
    case "DD":
        fullname = "devevelopement digital"
        break ;
    case "ID":
        fullname = "infrastructur digital"
        break ;
    case "GD":
        fullname = "graphic design"
        break ;
    case "MEC":
        fullname = "mechanic"
        break ;
    default:
        fullname = "not found"
    
}
console.log(fullname + " is a " + typeof(fullname))







