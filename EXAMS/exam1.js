////////////////////////___QUESTION 1___////////////////////////

// Création du tableau products
let products = [
    { 
        nom: "T-shirt",
        prix: 20.99,
        quantiteStock: 50
    },
    { 
        nom: "Jeans",
        prix: 45.50,
        quantiteStock: 30
    },
    { 
        nom: "Chaussures",
        prix: 69.99,
        quantiteStock: 0
    },
    {
        nom:"Jacket",
        prix:84.99,
        quantiteStock: 15
    }
];


console.log(products);

////////////////////////___QUESTION 2___////////////////////////


let cart = [];
console.log(cart);

////////////////////////___QUESTION 3___////////////////////////

function addToCart(productName) {
    let productIndex = products.findIndex(product => product.nom === productName);

    
    if (productIndex !== -1) {

        if (products[productIndex].quantiteStock > 0) {

            products[productIndex].quantiteStock--;

            
            cart.push({
                nom: productName,
                prix: products[productIndex].prix,
                quantite: 1
            });

            console.log(`Le produit "${productName}" a été ajouté au panier.`);
        } else {
            console.log(`Désolé, le produit "${productName}" n'est plus disponible en stock.`);
        }
    } else {
        console.log(`Le produit "${productName}" n'existe pas.`);
    }
}


addToCart("T-shirt");
addToCart("Jeans");
addToCart("Chaussures");
addToCart("Jacket")
console.log(cart); 

////////////////////////___QUESTION 4___////////////////////////

function displayCart() {
   
    const cartContainer = document.getElementById('cart-container');

    cartContainer.innerHTML = '';

    cart.forEach(product => {
        
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');

        const productName = document.createElement('span');
        productName.textContent = `Nom: ${product.nom}`;

        const productPrice = document.createElement('span');
        productPrice.textContent = `Prix: ${product.prix} €`;

        const productQuantity = document.createElement('span');
        productQuantity.textContent = `Quantité: ${product.quantite}`;

      
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Supprimer';
        removeButton.addEventListener('click', function() {
            removeFromCart(product.nom);
            displayCart(); 
        });

       
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productQuantity);
        productDiv.appendChild(removeButton);

        cartContainer.appendChild(productDiv);
    });
}


function removeFromCart(productName) {
   
    const index = cart.findIndex(product => product.nom === productName);
    
    if (index !== -1) {
        cart.splice(index, 1);
    }
}


displayCart();

////////////////////////___QUESTION 5___////////////////////////

function calculateTotal() {
    let total = 0;


    cart.forEach(product => {

        const productTotal = product.prix * product.quantite;
    
        total += productTotal;
    });

    return total;
}


const totalAmount = calculateTotal();
console.log("Montant total du panier:", totalAmount);

////////////////////////___QUESTION 6___////////////////////////

function removeFromCart(productName) {

    const index = cart.findIndex(product => product.nom === productName);

 
    if (index !== -1) {
       
        cart.splice(index, 1);
        console.log(`Le produit "${productName}" a été supprimé du panier.`);
    } else {
        console.log(`Le produit "${productName}" n'existe pas dans le panier.`);
    }
}


removeFromCart("T-shirt");

////////////////////////___QUESTION 7___////////////////////////


function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <p><strong>${product.nom}</strong> - Prix: ${product.prix} € - Quantité disponible: ${product.quantiteStock}</p>
            <button onclick="addToCart('${product.nom}')">Ajouter au panier</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Fonction pour passer la commande
function checkout() {
    alert('Commande passée avec succès !');
    cart = []; 
    displayCart(); 
    updateTotal(); 
}


displayProducts(); 