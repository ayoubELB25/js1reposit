let List = [];

let codeInput = document.getElementById("cd");
let nomInput = document.getElementById("nm");
let prenomInput = document.getElementById("pnm");
let groupeInput = document.getElementById("grp");
let noteInput = document.getElementById("nte");

let formObj = {};

function addToList() {
  
  formObj.code = codeInput.value;
  formObj.nom = nomInput.value;
  formObj.prenom = prenomInput.value;
  formObj.groupe = groupeInput.value;
  formObj.note = noteInput.value;

  List.push(formObj);
  console.log(List);
}

// document.getElementById("engr").addEventListener("click", function(p){
//     p.preventDefault();
//     addToList(List,formObj);
//     console.log(List);
    
// });

/////////////////////////////////////////////////////////////////////


function check() {
    let code = document.getElementById("cd").value;
    let nom = document.getElementById("nm").value;
    let prenom = document.getElementById("pnm").value;
    let groupe = document.getElementById("grp").value;
    let note = document.getElementById("nte").value;
  
  
    //   console.log("Le code n'est pas au bon format (DD-106-01)");
    //   document.getElementById("cd").style.borderColor = "red"

    //   return; 
    // }
  
    let formObj = {
      code,
      nom,
      prenom,
      groupe,
      note,
    };
  
    List.push(formObj);
    console.log(List); 
};
  

// function checkCode(code) {
//     const codePattern = /^(D{2})-106-(0{1})$/; 
//     return codePattern.test(code);
// };

    let code_inCH = document.getElementById("cd")
    function check(){
        let r = /^DD-106-\d{2}$/
        if (r.test(code_inCH)){
            console.log("Le code n'est pas au bon format")
        }
        else{
            console.log("La format du code est incoreect")
            code_inCH.style.borderColor = 'red';

        }
    }
  

////////////////////////////////////////////////////////////////////
