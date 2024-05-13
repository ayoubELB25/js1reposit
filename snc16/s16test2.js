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

document.getElementById('btn-ld').addEventListener("click", function() {
    loadData(function() {
        applyStyles();
    });
});

function loadData(callback) {
    const request = new XMLHttpRequest();
    request.open("GET", "s16STG.json", true);
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            let content = '';
            data.Lotus.forEach(function(item) {
                content += `<li>${item.model}`;
                content += `<p>${item.type} with ${item.horsepower} hp </p></li>`;
            });
            document.getElementById("d-list").innerHTML = content;
            callback(); // Call the callback function after data is loaded
            console.log(data)
        }
    };
    request.send();
    console.log("it's working");
    //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    
}

function applyStyles() {
    document.body.style.backgroundColor = "black"
    document.getElementById('d-list').style.listStyleType = "none";
    document.getElementById('d-list').style.textAlign = "center";
    document.querySelectorAll('li').forEach(function(li) {
        li.style.color = "orange";
        li.style.fontSize = "25px"
        li.style.fontFamily = "Arial"
    });
    document.querySelectorAll('p').forEach(function(Pi) {
        Pi.style.color = "blue";
        Pi.style.fontSize = "16px";
        Pi.style.fontFamily = "Arial"
    });
    document.querySelectorAll('button').forEach(function(dd){
        dd.style.backgroundColor = "orange";
        dd.style.color = "black";
        dd.style.border = "1px solid orange";
        dd.style.width = "150px"
        dd.style.height = "50px"
        dd.style.fontFamily = "Impact"
    })
}


function removeStyles() {
    document.body.style.backgroundColor = "";
    document.getElementById('d-list').style.listStyleType = "";
    document.getElementById('d-list').style.textAlign = "";
    document.querySelectorAll('li').forEach(function(li) {
        li.style.color = "";
        li.style.fontSize = "";
        li.style.fontFamily = "";
    });
    document.querySelectorAll('p').forEach(function(Pi) {
        Pi.style.color = "";
        Pi.style.fontSize = "";
        Pi.style.fontFamily = "";
    });
    document.querySelectorAll('button').forEach(function(dd){
        dd.style.backgroundColor = "";
        dd.style.color = "";
        dd.style.border = "";
        dd.style.width = "";
        dd.style.height = "";
        dd.style.fontFamily = "";
    });
}



///////////////////////////////////////__JS__////////////////////////////////

try {
    // Attempt to execute this code block
    let randomNumber = Math.random();
    if (randomNumber < 0.5) {
        throw new Error('Random number is too low');
    }
    console.log('Random number:', randomNumber);
} catch (error) {
    // Catch any errors that occurred in the try block
    console.error('An error occurred:', error.message);
} finally {
    // This block of code always executes, regardless of whether there was an error or not
    console.log('Finally block executed');
}


//XML 
// open(GET,'')
//onload
//send