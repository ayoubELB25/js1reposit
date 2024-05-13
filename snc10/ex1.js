const Form = [];

        function addName() {
            const nom = document.getElementById("nom").value;
            const prenom = document.getElementById("prenom").value;
            const age = document.getElementById("age").value;

            Form[Form.length] = { nom, prenom, age };                       

            displayNames();
        }

        function displayNames() {
            const namesList = document.getElementById("namesList");
            namesList.innerHTML = "";

            Form.forEach(name => {
                const paragraph = document.createElement("p");
                paragraph.textContent = "Nom: " + name.nom + ", Prénom: " + name.prenom + ", Age: " + name.age;
                namesList.appendChild(paragraph);
                namesList.style.height = "100%"
            });

        
        }
        // const rst = document.getElementById('rst')
        // function    ResetData () {
        //   if (rst.addEventListener("click")) {
        //     namesList.remove()
        //   }
        // }
        
        const resetB = document.getElementById("rst");
resetB.addEventListener("click", function() {
    const namesList = document.getElementById("namesList");
    if (namesList) {
        const childN = namesList.child;
        // Iterate over the child nodes of namesList in reverse order
        for (let i = childN.length - 1; i >= 0; i--) {
            namesList.remove(child[i]);
        }
    }
});

        



        