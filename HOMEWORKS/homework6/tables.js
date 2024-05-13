
document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Fetch form inputs
    var licensePlate = document.getElementById("license_plate").value;
    var regNumber = document.getElementById("regeneration_number").value;
    var color = document.getElementById("color").value;
    var category = document.getElementById("category").value
    // Regular expression for license plate (assuming a simple format)
    var licensePlateRegex = /^[A-Z0-9]{1,10}$/;
    
    // Validate inputs
    var isValid = true;
    if (!licensePlateRegex.test(licensePlate)) {
        document.getElementById("license_plate").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("license_plate").classList.remove("error");
    
    if (isValid) {
        document.getElementById("licensePlateForm").classList.add("success");
        alert("Form submitted successfully!");
    } else {
        alert("Please check the information provided.");
    }
}});




function AddToTable(){

    let LP = document.getElementById('license_plate').value;
    let RN = document.getElementById('regeneration_number').value;
    let CLR = document.getElementById('color').value;
    let CAT = document.getElementById('category').value;


    let tbl = document.getElementById("licenseTable")
    let tem = `          
    <tr>
        <td>${LP}</td>
        <td>${RN}</td>
        <td>${CLR}</td>
        <td>${CAT}</td>
        <td><button id="delbtn" onclick="abc(this)">DELETE</button></td

    </tr>
    `
    tbl.innerHTML+= tem
}
// document.getElementById("delbtn").onclick = function deleteFromTbale()
 
 

function abc(button){
    let row = button.parentNode.parentNode
    row.parentNode.removeChild(row)
    
}
////////////////////////////////////////////__how to get the data from a JSON file__///////////////////////////////////////////////////

function gt() {
    const req = new XMLHttpRequest(); // Create an XMLHttpRequest object
    req.open("GET", "tables.json", true); // Open a GET request to tables.json asynchronously
    req.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let responseData = JSON.parse(this.responseText); // Parse the JSON response
        console.log("GET");
      }
    };
  }
  

