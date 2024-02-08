// revision du seance précedents
// les types de variales : primitifs (*string *number *undefined *boolean) structurels (*date *aray *object *function)


alert('this is the fourth test')
console.log("welcome agian!!")

// Conversion de chaînes en nombres
let num1 = Number("3.14");
console.log(num1); 

let num2 = Number("")
console.log(num2)

let num3 = Number("  ")
console.log(num3)


let num4 = Number("99 098")
console.log(num4)

// Conversion de nombres en chaînes

let ch1 = String("X")
console.log(typeof(ch1))

let ch2 = String(2024)
console.log(typeof(ch2))

let ch3 = String(20 + 30)
console.log(typeof(ch3))
 
console.log(String(100)+String(232))

// tostring()
let t = "Strg"
t.toString()
console.log(typeof(t))

let ts1 = 234
let nTs1 = ts1.toString()
console.log(typeof(ts1.toString()))

console.log()

//boolean 
let  bln1 = 9
let bln2 = 10
console.log(Boolean(bln1))
console.log(Boolean(bln2))

//
dt1 = new Date()
Number = dt1
console.log(dt1)

dt2 = new Date()
dt2.getTime()
console.log(dt2) 

dt3 = new Date()
console.log(dt3.getDate()  + " this is getDate") 
console.log(dt3.getFullYear() +" this is getFullYear")
console.log(dt3.getMonth() + " this is getMonth")
console.log(dt3.getDay() + " this is getDay")
console.log(dt3.getHours() + " this is getHours")
console.log(dt3.getMinutes() + " this is getMinutes")
console.log(dt3.getSeconds() + " this is getSeconds")
console.log(dt3.getMilliseconds() + " this is getMilliseconds")
console.log(dt3.getTime() + " this is getTime")
console.log(dt3.getTimezoneOffset() + " this is getTimezoneOffset")
console.log(dt3.getUTCDate() + " this is getUTCDate")
console.log(dt3.getUTCFullYear() + " this is getUTCFullYear")
console.log(dt3.getUTCMonth() + " this is getUTCMonth")
console.log(dt3.getUTCDay() + " this is getUTCDay")
console.log(dt3.getUTCHours() + " this is getUTCHours")
console.log(dt3.getUTCMinutes() + " this is getUTCMinutes")
console.log(dt3.getUTCSeconds() + " this is getUTCSeconds")
console.log(dt3.getUTCMilliseconds() + " this is getUTCMilliseconds")

console.log(" ^ ALL these numbers that represent time are starting from 0 that's why the dates aren't accurate")
console.log(" for  Universal Time Coordinated (UTC) the timme is -1 hour than the standard time ")

const dt4 = new Date()
dt4.setDate(2020, 1, 1)
console.log(dt4)

// CONDITIONS       
let day;

switch (new Date().getDay()) {
    case  0 :
        day = "Sunday"; break ;
    case 1 :
        day = "Monday"; break ;
    case 2 :
        day = "Tuesday"; break ;
    case 3 :
        day = "Wednesday"; break ;
    case 4 :
        day = "Thursday"; break ;
    case 5  :
        day = "Friday"; break ;
    case 6 :
        day = "Saturday"; break ;
}
console.log(day)
console.log(new Date().getDay())



