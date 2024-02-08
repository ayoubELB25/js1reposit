alert('this is the fifth test')
for (let i=0;i<=5;i++) {
    console/console.log(i);
}

let t = [1,2,3,4,5,6,7]
console.log(t)

let daays = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
for (let v=0;v<7;v++) {
    console.log(" 1st methode " + daays[v])
}

// for in
let daaays = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
for (let v1=0;v1<= (daaays.length-1);v1++) {
    console.log("2nd methode  " + daaays[v1])
}

// for / of
for (let d of daaays){
    console.log("3rd methode  " + d)
}

// while loop 
console.log(" While Loop ")
let n1 
n1 = 10
while(n1>=0) {
    console.log(n1)
    n1 -= 1
}
console.log(" Do While Loop ")
let n2 = 10;
do {
    console.log(n2)
    n2-=1
}
while(n2>=0)
// for each       bloc = (for,while,for of ....)   the Modern javaScript is "compiler"
let Jours
Jours = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
let txtJours = "";
Jours.forEach(MyFunction)
function MyFunction(value, index ,array) {
    txtJours +=   value + ", fun fact this is a day of the week . " ;


}
console.log(txtJours)

// break
console.log("THIS IS BREAK")
for(let jr2=0;jr2< (Jours.length-1);jr2++){
    if (jr2===3){
        console.log("stop");
        break;
    }
    console.log(Jours[jr2])
}

// contnue
console.log("THIS IS CONTINUE")
for(let jr1=0;jr1< (Jours.length-1);jr1++){
    if (jr1===3){
        console.log("stop");
        continue;
    }
    console.log(Jours[jr1])
}
