let list = []
function addObj(){
    let code_input = document.getElementById("codeI").value
    let nom_input = document.getElementById("nomI").value
    let pnom_input = document.getElementById("pnomI").value
    let group_input = document.getElementById("grpI").value
    let note_input = document.getElementById("noteI").value

    let info = {"code" : code_input, "nom": nom_input, "prenom": pnom_input, "group": group_input, "note": note_input}
    list.push(info)
    console.log(list)

}

let code_inp2 = document.getElementById("codeI");

function check1() {
    let code_input = code_inp2.value;

    let regex = /^DD-106-\d{2}$/;


    if (regex.test(code_input)) {
        console.log("True");

        code_inp2.style.borderColor = 'green';
    } else {
        console.log("False");

        code_inp2.style.borderColor = 'red';
    }
}



function addst(ob) {
    let table = document.getElementById("tab");
    let template = 
        `<tr>
            <td>${ob.code}</td>
            <td>${ob.nom}</td>
            <td>${ob.prenom}</td>
            <td>${ob.groups}</td>
            <td>${ob.note}</td>
        </tr>`
    table.innerHTML += template;
};