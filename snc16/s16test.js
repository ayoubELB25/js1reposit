// JSON : JavaScript Object Notation

// methods are get and post , post is more secure

// AJAX : Asynchronous JavaScript And XML

const objct = [
    {
        id:1,
        nom:"personX",
        branche:"DD"
    },
    {
        "id":2,
        "person":"personY",
        "branche":"ID"
    }
]
//
console.log(objct)

const stags = [
    { 
        id:1,
        nom:"Ayoub",
        Age:19,
        branche:"DD"
    },
    { 
        id:2,
        nom:"personX",
        Age:18,
        branche:"DD"
    },
    { 
        id:3,
        nom:"personY",
        Age:19,
        branche:"ID"
    },
    { 
        id:4,
        nom:"personZ",
        Age:17,
        branche:"GE"
    },
    { 
        id:5,
        nom:"personXX",
        Age:25,
        branche:"MEC"
    },
]
console.log(stags)
console.log(stags[0].id)
console.log(` le nom de stagiare est : ${stags[0].nom}`)


//FORMAT JSON


// const stgJSONs = JSON.stringify(stg); //
// const stgJSONp = JSON.parse(stg) ;//

// const txt = ["Ford", "BMW", "Audi", "Fiat"];
// const myArr = JSON.parse(txt)
// console.log(txt)

// JSON data
var jsonData = '{"name": "John Doe", "age": 30, "city": "New York"}';

// Parse the JSON data
var parsedData = JSON.parse(jsonData);

// Access the parsed data
console.log(parsedData)
console.log(parsedData.name); // Output: John Doe
console.log(parsedData.age);  // Output: 30
console.log(parsedData.city); // Output: New York

////////////////////////__s16STG.json__///////////////////////////
// [
//     {
//         "id":121,
//         "nom":"AYOUB",
//         "age":19
//     },
//     {
//         "id":546,
//         "nom":"ANOUAR",
//         "age":18
//     },
//     {
//         "id":919,
//         "nom":"YESSINE",
//         "age":20
//     },
//     {
//         "id":176,
//         "nom":"ANAS",
//         "age":16
//     }
// ]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//AJAX













//XML 
// open(GET,'')
//onload
//send