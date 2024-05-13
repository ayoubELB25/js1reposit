// here is the work
let listStagiaire = [];

class Stagiaire{
    constructor(id,nom,filiere,note){
        this.id = id,
        this.nom = nom,
        this.filiere = filiere,
        this.note = note
    }
}

const stagiaire1 = new Stagiaire(11,"First Person","TDI",17);
const stagiaire2 = new Stagiaire(21,"Second Guy","TDI",12);
const stagiaire3 = new Stagiaire(29,"Third person","TRI",14);
const stagiaire4 = new Stagiaire(94,"The Fourth","TDM",10);



let CID = document.getElementById("in-id").value ;    
let NOM = document.getElementById("name") .value ;
let NOTE = document.getElementById("note").value ;
let FLR;

///////////////////////////////__EVENTS__///////////////////////////////
document.getElementById("ajouter").addEventListener("click", function(e){
    e.preventDefault();
    show();
    // addnewSTG();
    

})
// afficher le tableau 
document.getElementById("afficher").addEventListener("click", function(e){
    e.preventDefault();
    showTable();
})

document.getElementById("ajouterTB").addEventListener("click", (e) => {
    e.preventDefault();
    AddToTable();
  });

  
///////////////////////////////__FUNCTION__///////////////////////////////

function show(){
    listStagiaire.push(stagiaire1);
    console.log(`${stagiaire1.nom} is added`)
    listStagiaire.push(stagiaire2);
    console.log(`${stagiaire2.nom} is added`)
    listStagiaire.push(stagiaire3);
    console.log(`${stagiaire3.nom} is added`)
    listStagiaire.push(stagiaire4);
    console.log(`${stagiaire4.nom} is added`)
    //
    console.log(listStagiaire);

}
//
const addnewSTG = () => {
    // in the function you can name the variables some existing names no probleme,
    let CID = document.getElementById("in-id").value ;    
    let NOM = document.getElementById("name") .value ;
    let NOTE = document.getElementById("note").value ;
    let FLR;


    // check for the empty feilds
    if(!CID || ! NOM || !NOTE ){
        document.getElementById("in-id").style.border = "1px solid red"
        document.getElementById("name").style.border = "1px solid red"
        document.getElementById("note").style.border = "1px solid red"
        alert("Please fill all required fields!")
    }
    // select filiere
    let tdi = document.getElementById("tdi");
    let tdm = document.getElementById("tdm");
    let tri = document.getElementById("tri")
    if(tdi.checked ){
        FLR = "TDI"
    }
    else if(tdm.checked ) {
        FLR = "TDM"
    }
    else if(tri.checked ){
        FLR = "TRI"
    }
    else{
        alert("No filiere selected");
    }

    // Create a new object element
    const newStagiaire = new Stagiaire(CID,NOM,FLR,NOTE)
    //condition to check the values in case the were empty , thei will no be pushed
    if(!CID || ! NOM || !NOTE){
        console.log(`you must fill all the requird fields`)
    }
    else {
        listStagiaire.push(newStagiaire)
        console.log(` stagiare ${newStagiaire.NOM} sucessfully added `);
    }
    //
    
    //add clear function to clear the feilds



}

function showTable(){
    const cont = document.getElementById("tbl-cont")
    const anm = document.getElementById("afficher")
    if(anm.value === "afficher"){
        cont.style.display = "block"
        anm.value = "masquer"
    }
    else {
        cont.style.display = "none"
        anm.value = "afficher"
    }

    }


function AddToTable(){
    //
    let CID = document.getElementById("in-id").value ;    
    let NOM = document.getElementById("name") .value ;
    let NOTE = document.getElementById("note").value ;
    let FLR;

    // check for the empty feilds
    if(!CID || ! NOM || !NOTE ){
        document.getElementById("in-id").style.border = "1px solid red"
        document.getElementById("name").style.border = "1px solid red"
        document.getElementById("note").style.border = "1px solid red"
        alert("Please fill all required fields!")
        FLR = ""
    }
    else{
            document.getElementById("in-id").style.border = "1px solid black"
            document.getElementById("name").style.border = "1px solid black"
            document.getElementById("note").style.border = "1px solid black"
    }
    // select filiere
    let tdi = document.getElementById("tdi");
    let tdm = document.getElementById("tdm");
    let tri = document.getElementById("tri")
    if(tdi.checked ){
        FLR = "TDI"
    }
    else if(tdm.checked ) {
        FLR = "TDM"
    }
    else if(tri.checked ){
        FLR = "TRI"
    }
    else{
        alert("No filiere selected");
    }
    //...
    let table = document.getElementById("tbl");
    let content
    //...
    if(!CID || !NOM || !NOTE || !FLR){
        content = ""
    }else{
        content = `
        <tr>
            <td>${CID}</td>
            <td>${NOM}</td>
            <td>${FLR}</td>
            <td>${NOTE}</td>
            <td><button class="dl-btn">DELETE</button></td>
            <td><button class="mdf-btn">MODIFY</button></td>
        </tr>
        
        `
    }
    table.innerHTML += content;

      // Attach event listener to all dynamically created "DELETE" buttons
        const deleteButtons = document.querySelectorAll(".dl-btn");
        for (const button of deleteButtons) {
            button.addEventListener("click", DeleteFromTable);
  
}
};
//confirm(" this is a methode")

function DeleteFromTable(e){
    e.preventDefault();
    console.log(e.currentTarget.CID)// index of stagaiare
    // Get the clicked button's parent row element (assuming the button is inside a table row)
    const rowToDelete = e.currentTarget.parentElement
    // const stagaiareid = rowToDelete.children[0].innerText;
    // const stagaiarenom = rowToDelete.children[1].innerText;
    //
    if(confirm("are you sure you want to delete your info ?")){
        rowToDelete.parentElement.remove();
        console.log(` is removed from the list`)
    }
    // add a try-catch
};

/////////////////////////////__XMLHTTPrequest__/////////////////////////////
//EVENT:
document.addEventListener("DOMContentLoaded" , changement);
//
function changement(){
    let colors;
    const req = new XMLHttpRequest;
    req.open("GET","name.json",true);
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.readyState == 200){
            let responseData = JSON.parse(this.responseText)
            colors = responseData.colors
            let colorsOP;
            for(let i = 0 ; i < colors.length ; i++){
                colorsOP += `<option value="${colors[i]}`
            }
        }
    }
    req.send();
}