document.getElementById("addProductBtn").addEventListener("click", function() {
    document.getElementById("productForm").style.display = "block";
});

document.getElementById("addProductForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let productCode = document.getElementById("productCode").value;
    let productTitle = document.getElementById("productTitle").value;
    let productDescription = document.getElementById("productDescription").value;
    let productPrice = document.getElementById("productPrice").value;
    let productCategory = document.getElementById("productCategory").value;

    
    addProductToTable(productCode, productTitle, productDescription, productPrice, productCategory);

    
    document.getElementById("addProductForm").reset();

    
    document.getElementById("productForm").style.display = "none";
});

function addProductToTable(code, title, description, price, category) {
    let table = document.getElementById("productList");
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);

    cell1.textContent = code;
    cell2.textContent = title;
    cell3.textContent = description;
    cell4.textContent = price;
    cell5.textContent = category;
    cell6.innerHTML = '<button style="background-color:red" onclick="deleteProduct(this)">Supprimer</button> <button style="background-color:orange" onclick="modifyProduct(this)" >Modifier</button>';
}

function deleteProduct(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    document.querySelector("productPrice").value = 0

}

function modifyProduct(btn) {
    let row = btn.parentNode.parentNode;
    let table = row.parentNode;
    let rowIndex = row.rowIndex;
    document.querySelector("productPrice").value = 0;

    

    
    row.style.display = "none";

   
    let code = row.cells[0].textContent;
    let title = row.cells[1].textContent;
    let description = row.cells[2].textContent;
    let price = row.cells[3].textContent;
    let category = row.cells[4].textContent;

    
    document.getElementById("productCode").value = code;
    document.getElementById("productTitle").value = title;
    document.getElementById("productDescription").value = description;
    document.getElementById("productPrice").value = price;
    document.getElementById("productCategory").value = category;

    document.getElementById("productForm").style.display = "block";
}
////////////////////////__TOTAL PRICE__////////////////////////////////////

document.getElementById("calculateTotalBtn").addEventListener("click", calculateTotalPrice);


function calculateTotalPrice() {
    let tableRows = document.querySelectorAll("#productList tr");
    let totalPrice = 0;

   
    tableRows.forEach(row => {
      
        let price = parseFloat(row.cells[3].textContent);
        totalPrice += price;
    });
    if(totalPrice >= 5000){
        document.getElementById("totalPriceInput").style.color = "red"
        
    }


    document.getElementById("totalPriceInput").value = totalPrice.toFixed(2);
}





document.addEventListener("DOMContentLoaded", function() {
    let table = document.getElementById("productTable");

    // Attach event listener to the table
    table.addEventListener("click", function(event) {
        let target = event.target;

        // Check if the clicked element is a "Modifier" button
        if (target.tagName === "BUTTON" && target.textContent === "Modifier") {
            // Find the row of the clicked button
            let row = target.closest("tr");

            // Extract the values from the row cells
            let code = row.cells[0].textContent;
            let title = row.cells[1].textContent;
            let description = row.cells[2].textContent;
            let price = row.cells[3].textContent;
            let category = row.cells[4].textContent;

            // Set the input values in the form
            document.getElementById("productCode").value = code;
            document.getElementById("productTitle").value = title;
            document.getElementById("productDescription").value = description;
            document.getElementById("productPrice").value = price;
            document.getElementById("productCategory").value = category;

            // Show the form for modification
            document.getElementById("productForm").style.display = "block";
        }
        
    });

    
});


//////////////////////////////////___________________FIX THIS DOWN HERE___________________/////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let cart = [];


document.getElementById("saveProductBtn").addEventListener("click", function() {
    let productCode = document.getElementById("productCode").value;
    let productTitle = document.getElementById("productTitle").value;
    let productDescription = document.getElementById("productDescription").value;
    let productPrice = document.getElementById("productPrice").value;
    let productCategory = document.getElementById("productCategory").value;

    if (validateForm(productCode, productTitle, productDescription, productPrice, productCategory)) {
        addProductToTable(productCode, productTitle, productDescription, productPrice, productCategory);
        document.getElementById("addProductForm").reset();
        document.getElementById("productForm").style.display = "none";
    } else {
        alert("Successfully saved"); 
        
    }

});


function addToCart() {
    let code = row.cells[0].textContent;
    let title = row.cells[1].textContent;
    let description = row.cells[2].textContent;
    let price = row.cells[3].textContent;
    let category = row.cells[4].textContent;

    
    document.getElementById("productCode").value = code;
    document.getElementById("productTitle").value = title;
    document.getElementById("productDescription").value = description;
    document.getElementById("productPrice").value = price;
    document.getElementById("productCategory").value = category;

    let product = {
        code: productCode,
        title: productTitle,
        description: productDescription,
        price: productPrice,
        category: productCategory
    };

    cart.push(product); 
    console.log("Cart:", cart); 
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////___________________FIX THIS UP HERE___________________/////////////////////////////////////


function validateForm(code, title, description, price, category) {
   
    if (code === "" || title === "" || description === "" || price === "" || category === "") {
        return false;
    }

    
    if (isNaN(price)) {
        return false;
    }

    

    return true;
}


///////////////////////////__Q11__///////////////////////////////



/////////////////////////////__Q3__/////////////////////

document.getElementById("cancelProductBtn").addEventListener("click", function() {
    document.getElementById("productForm").style.display = "none";
});

/////////////////////////////__Q4_///////////////////////////////
document.getElementById("clearProductBtn").addEventListener("click", function() {
    document.getElementById("addProductForm").reset();
});
//////////////////////////////__Q6__////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    let tableRows = document.querySelectorAll("#productList tr");
    tableRows.forEach(row => {
        row.addEventListener("click", function() {
            tableRows.forEach(row => {
                row.classList.remove("selected");
            });
            row.classList.add("selected");
        });
    });
});
//////////////////////////////////////__Q7__/////////////////////////////
document.getElementById("deleteProductBtn").addEventListener("click", function() {
    
    let selectedRows = document.querySelectorAll("#productList tr.selected");
    
   
    if (selectedRows.length > 0 && confirm("Êtes-vous sûr de vouloir supprimer le produit sélectionné ?")) {
        selectedRows.forEach(row => {
            row.remove();
        });
    }
});

/////////////////////////////////////__Q8__////////////////////////////////////////
class Produit {
    constructor(codeProduit, titre, description, prix, categorie) {
        this.codeProduit = codeProduit;
        this.titre = titre;
        this.description = description;
        this.prix = prix;
        this.categorie = categorie;
    }
}


//////////////
let nouveauProduit = new Produit("123456", "Ordinateur portable", "Ordinateur portable haut de gamme", 999.99, "Électronique");


console.log(nouveauProduit.codeProduit); 
console.log(nouveauProduit.titre); 
console.log(nouveauProduit.description); 
console.log(nouveauProduit.prix); 
console.log(nouveauProduit.categorie); 


/////////////////////////__Q9__//////////////////////////////////////


let produit1 = new Produit("001", "Smartphone", "Smartphone haut de gamme avec écran OLED", 799.99, "Électronique");


let produit2 = new Produit("002", "Montre connectée", "Montre connectée avec suivi d'activité et notifications", 249.99, "Accessoires");

console.log("Produit 1:");
console.log("Code produit:", produit1.codeProduit);
console.log("Titre:", produit1.titre);
console.log("Description:", produit1.description);
console.log("Prix:", produit1.prix);
console.log("Catégorie:", produit1.categorie);
console.log();

console.log("Produit 2:");
console.log("Code produit:", produit2.codeProduit);
console.log("Titre:", produit2.titre);
console.log("Description:", produit2.description);
console.log("Prix:", produit2.prix);
console.log("Catégorie:", produit2.categorie);
/////////////////////////////////__Q10__//////////////////////////////////////
document.getElementById("showCategoriesBtn").addEventListener("click", function() {
    fetch("CTG.json")
        .then(response => response.json())
        .then(data => {
            displayCategories(data.data);
        })
        .catch(error => {
            console.error("Une erreur s'est produite lors de la récupération des catégories:", error);
        });

});

function displayCategories(categories) {
    let categoriesList = document.getElementById("categoriesList");
    categoriesList.innerHTML = "";
    
    categories.forEach(category => {
        let li = document.createElement("li");
        li.textContent = category.titre;
        categoriesList.appendChild(li);
    });
}
/////////////////////__ASYNC FUNCTIONS__/////////////////////////////
/*async function fetchCategories() {
    try {
      const url = 'CTG.json'; // Replace with your actual API endpoint
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching categories:', error);
      // Handle errors appropriately, e.g., display an error message to the user
      return null; // Or return an empty array or default value to prevent breaking your code
    }
  }
  
  // Usage example:
  (async () => {
    const categories = await fetchCategories();
  
    if (categories) {
      // Use the categories data here
      console.log(categories); // Example: logs the fetched JSON data
      // You can now use categories in your JS files for various purposes (e.g., populate lists, filter products)
    }
  })();*/
  
//////////////////////////__AJAX__////////////////////////
// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Specify the URL of the JSON file
var url = "CTG.json";

// Open a GET request to the specified URL
xhr.open("GET", url, true);

// Set up an onload function to handle the response
xhr.onload = function() {
    // Check if the request was successful (status code 200)
    if (xhr.status === 200) {
        // Parse the JSON response
        var data = JSON.parse(xhr.responseText);
        
        // Your code to handle the data goes here
        console.log(data);
    } else {
        // If the request was not successful, log an error message
        console.error("Failed to load data: " + xhr.status);
    }
};

// Set up an onerror function to handle any errors
xhr.onerror = function() {
    console.error("Request failed");
};

// Send the request
xhr.send();


/////////////////////////__FETCH__/////////////////////////////
// Fetch the JSON data containing the categories
fetch("CTG.json")
    .then(response => response.json())
    .then(data => {
        // Extract the categories array from the data
        var categories = data.ctg;

        // Get the select element by its id
        var select = document.getElementById("productCategory");

        // Loop through the categories array and create an option element for each category
        categories.forEach(category => {
            var option = document.createElement("option");
            option.value = category.type; // Set the value of the option to the category type
            option.textContent = category.type; // Set the text content of the option to the category type
            select.appendChild(option); // Append the option to the select element
        });
    })
    .catch(error => {
        console.error("Error fetching categories:", error);
    });





/*
/////////////////////////__Q1__//////////////////////////////
    document.getElementById("addProductBtn").addEventListener("click", function() {
        document.getElementById("productForm").style.display = "block";
    });
    
    document.getElementById("addProductForm").addEventListener("submit", function(event) {
        event.preventDefault();
    
        let productCode = document.getElementById("productCode").value;
        let productTitle = document.getElementById("productTitle").value;
        let productDescription = document.getElementById("productDescription").value;
        let productPrice = document.getElementById("productPrice").value;
        let productCategory = document.getElementById("productCategory").value;
    

        
        addProductToTable(productCode, productTitle, productDescription, productPrice, productCategory);
    
        
        document.getElementById("addProductForm").reset();
    
        
        document.getElementById("productForm").style.display = "none";
    });
    
    function addProductToTable(code, title, description, price, category) {
        let table = document.getElementById("productList");
        let newRow = table.insertRow(-1);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);
        let cell6 = newRow.insertCell(5);
    
        cell1.textContent = code;
        cell2.textContent = title;
        cell3.textContent = description;
        cell4.textContent = price;
        cell5.textContent = category;
        cell6.innerHTML = '<button onclick="deleteProduct(this)">Supprimer</button>';
    }
    
    function deleteProduct(btn) {
        let row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
    ///////////////////////__Q2__//////////////////////////
    document.getElementById("saveProductBtn").addEventListener("click", function() {
        
        let productCode = document.getElementById("productCode").value;
        let productTitle = document.getElementById("productTitle").value;
        let productDescription = document.getElementById("productDescription").value;
        let productPrice = document.getElementById("productPrice").value;
        let productCategory = document.getElementById("productCategory").value;
    
    
        if (validateForm(productCode, productTitle, productDescription, productPrice, productCategory)) {
            
            addProductToTable(productCode, productTitle, productDescription, productPrice, productCategory);
            
            
            document.getElementById("addProductForm").reset();
    
           
            document.getElementById("productForm").style.display = "none";
        } else {
            
            alert("Veuillez remplir tous les champs du formulaire et vérifier les valeurs numériques.");
        }
    });
    
    function validateForm(code, title, description, price, category) {
       
        if (code === "" || title === "" || description === "" || price === "" || category === "") {
            return false;
        }
    
        
        if (isNaN(price)) {
            return false;
        }
    
        
    
        return true;
    }
    /////////////////////////////__Q3__/////////////////////
    document.getElementById("cancelProductBtn").addEventListener("click", function() {
        document.getElementById("productForm").style.display = "none";
    });
    
    /////////////////////////////__Q4_///////////////////////////////
    document.getElementById("clearProductBtn").addEventListener("click", function() {
        document.getElementById("addProductForm").reset();
    });
    //////////////////////////////__Q6__////////////////////////////////////
    document.addEventListener("DOMContentLoaded", function() {
        let tableRows = document.querySelectorAll("#productList tr");
        tableRows.forEach(row => {
            row.addEventListener("click", function() {
                tableRows.forEach(row => {
                    row.classList.remove("selected");
                });
                row.classList.add("selected");
            });
        });
    });
    //////////////////////////////////////__Q7__/////////////////////////////
    document.getElementById("deleteProductBtn").addEventListener("click", function() {
        
        let selectedRows = document.querySelectorAll("#productList tr.selected");
        
       
        if (selectedRows.length > 0 && confirm("Êtes-vous sûr de vouloir supprimer le produit sélectionné ?")) {
            selectedRows.forEach(row => {
                row.remove();
            });
        }
    });
    /////////////////////////////////////__Q8__////////////////////////////////////////
    class Produit {
        constructor(codeProduit, titre, description, prix, categorie) {
            this.codeProduit = codeProduit;
            this.titre = titre;
            this.description = description;
            this.prix = prix;
            this.categorie = categorie;
        }
    }
    
    
    //////////////
    let nouveauProduit = new Produit("123456", "Ordinateur portable", "Ordinateur portable haut de gamme", 999.99, "Électronique");
    
    
    console.log(nouveauProduit.codeProduit); 
    console.log(nouveauProduit.titre); 
    console.log(nouveauProduit.description); 
    console.log(nouveauProduit.prix); 
    console.log(nouveauProduit.categorie); 
    
    
    /////////////////////////__Q9__//////////////////////////////////////
    
    
    let produit1 = new Produit("001", "Smartphone", "Smartphone haut de gamme avec écran OLED", 799.99, "Électronique");
    
    
    let produit2 = new Produit("002", "Montre connectée", "Montre connectée avec suivi d'activité et notifications", 249.99, "Accessoires");
    
    console.log("Produit 1:");
    console.log("Code produit:", produit1.codeProduit);
    console.log("Titre:", produit1.titre);
    console.log("Description:", produit1.description);
    console.log("Prix:", produit1.prix);
    console.log("Catégorie:", produit1.categorie);
    console.log();
    
    console.log("Produit 2:");
    console.log("Code produit:", produit2.codeProduit);
    console.log("Titre:", produit2.titre);
    console.log("Description:", produit2.description);
    console.log("Prix:", produit2.prix);
    console.log("Catégorie:", produit2.categorie);
    /////////////////////////////////__Q10__//////////////////////////////////////
    document.getElementById("showCategoriesBtn").addEventListener("click", function() {
        fetch("https://www.mustore.com/cat")
            .then(response => response.json())
            .then(data => {
                displayCategories(data.data);
            })
            .catch(error => {
                console.error("Une erreur s'est produite lors de la récupération des catégories:", error);
            });
    });
    
    function displayCategories(categories) {
        let categoriesList = document.getElementById("categoriesList");
        categoriesList.innerHTML = "";
        
        categories.forEach(category => {
            let li = document.createElement("li");
            li.textContent = category.titre;
            categoriesList.appendChild(li);
        });
    }
    */