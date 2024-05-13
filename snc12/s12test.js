// alert('welcome to the 12th test')

// ttl = document.title = ('this is the 12th test')
// console.log('ttl')


// const bttnn = document.getElementsByTagName('input')
// console.log(bttnn)
// bttnn[0].style.border = "2px solid red "

// const bttnn = document.getElementsByTagName('input')[0].classList.add('input1'); // Access the first input element

// // Apply the style to the input element
// bttnn.style.border = "2px solid red";

/////////////////////////////////////////////////////////////////////////////////////


// document.querySelector(".txtlogin").addEventListener("keypress", function(event){
//     event.preventDefault()
//     console.log(event.keyCode);
//     if (event.keyCode === 13){
//         document.querySelector(".btn").classList.add("change_border_color");
//         document.querySelector(".btn").classList.remove("error");
//     }
//     else if (event.keyCode === 32){
//         document.querySelector(".btn").classList.add("error");
//         document.querySelector(".btn").classList.remove("change_border_color")
//     }
//     console.log('you clicked on a button')
// })


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelector('.btn').addEventListener("click", function(e) {
    e.preventDefault();

    let cin = document.forms["SignUpForm"]["login0"].value;
    let fname = document.forms["SignUpFom"]["login1"].value;
    let lname = document.forms["SignUpFom"]["login2"].value;
    let ag = document.forms["SignUpFom"]["login3"].value;
    let fl = document.forms["SignUpFom"]["login4"].value;
    let md = document.forms["SignUpFom"]["login5"].value;
    
    console.log(cin)
    console.log(fname);
    console.log(lname);
    console.log(ag);
    console.log(fl);
    console.log(md);
    

    // CIN 0 //
    if (cin === "") {
        document.getElementById('inp0').classList.add('error');
        document.querySelector("#sp0").innerText = "Enter your last name";
        document.querySelector("#sp0").style.display = "block";
        document.querySelector("#sp0").style.display = "red";
    } 
    // else if (lname.length < 3 || lname.length > 25) {
    //     document.getElementById('inp2').classList.add('lenght_prob');
    //     document.querySelector("#sp2").innerText = "Characters must be between 3 and 25.";
    //     document.querySelector("#sp2").style.display = "block";
    //     document.querySelector("#sp2").style.color = "dodgerblue";
    // }
    else {
        document.getElementById('inp0').classList.add('change_border_color');
        document.getElementById('inp0').classList.remove('error');
        document.getElementById('inp0').classList.add('change_border_color');
        document.querySelector("#sp0").style.display = "none";
    }
    // FIRST NAME 1 //
    if (fname === "") {
        document.getElementById('inp1').classList.add('error');
        document.querySelector("#sp1").innerText = "Enter your first name.";
        document.querySelector("#sp1").style.display = "block";
        document.querySelector("#sp3").style.display = "red";
    }
    // else if (fname.length < 3 || fname.length > 25) {
    //         document.getElementById('inp1').classList.add('lenght_prob');
    //         document.querySelector("#sp1").innerText = "Characters must be between 3 and 25.";
    //         document.querySelector("#sp1").style.display = "block";
    //         document.querySelector("#sp1").style.color = "dodgerblue";
            
        // }
     else {
        document.getElementById('inp1').classList.remove('error');
        document.getElementById('inp1').classList.add('change_border_color');
        document.querySelector("#sp1").style.display = "none";
    }
    ///////////////
    // LAST NAME 2 //
    if (lname === "") {
        document.getElementById('inp2').classList.add('error');
        document.querySelector("#sp2").innerText = "Enter your last name.";
        document.querySelector("#sp2").style.display = "block";
        document.querySelector("#sp2").style.display = "red";
    } 
    // else if (lname.length < 3 || lname.length > 25) {
    //     document.getElementById('inp2').classList.add('lenght_prob');
    //     document.querySelector("#sp2").innerText = "Characters must be between 3 and 25.";
    //     document.querySelector("#sp2").style.display = "block";
    //     document.querySelector("#sp2").style.color = "dodgerblue";
    // }
    else {
        document.getElementById('inp2').classList.add('change_border_color');
        document.getElementById('inp2').classList.remove('error');
        document.getElementById('inp2').classList.add('change_border_color');
        document.querySelector("#sp2").style.display = "none";
    }
    /////////
    // AGE 3 //
    if (ag === "") {
        document.getElementById('inp3').classList.add('error');
        document.querySelector("#sp3").innerText = "Enter your last name.";
        document.querySelector("#sp3").style.display = "block";
        document.querySelector("#sp3").style.display = "red";
    }
    // else if (ag.length < 3 || ag.length > 25) {
    //     document.getElementById('inp3').classList.add('lenght_prob');
    //     document.querySelector("#sp3").innerText = "Characters must be between 3 and 25.";
    //     document.querySelector("#sp3").style.display = "block";
    //     document.querySelector("#sp3").style.color = "dodgerblue";
    // }
     else {
       
        document.getElementById('inp3').classList.add('change_border_color');
        document.getElementById('inp3').classList.remove('error');
        document.querySelector("#sp3").style.display = "none";
    }
     // FILLIERE 4 //
     if (fname === "") {
        document.getElementById('inp1').classList.add('error');
        document.querySelector("#sp1").innerText = "Enter your first name.";
        document.querySelector("#sp1").style.display = "block";
        document.querySelector("#sp3").style.display = "red";
    }
    // else if (fname.length < 3 || fname.length > 25) {
    //         document.getElementById('inp1').classList.add('lenght_prob');
    //         document.querySelector("#sp1").innerText = "Characters must be between 3 and 25.";
    //         document.querySelector("#sp1").style.display = "block";
    //         document.querySelector("#sp1").style.color = "dodgerblue";
            
        // }
     else {
        document.getElementById('inp1').classList.remove('error');
        document.getElementById('inp1').classList.add('change_border_color');
        document.querySelector("#sp1").style.display = "none";
    }
});


//     let inputText = document.getElementsByClassName('txtlogin');
//     console.log(inputText)

    
//     if (inputText.value === "") {
//         inputText.classList.add('error');
//         document.querySelector("#sp1").innerText="enter your first name "
//         document.querySelector("#sp1").style.display = "block"
//         document.querySelector("#sp2").innerText="enter your last name "
//         document.querySelector("#sp2").style.display = "block"
//         document.querySelector("#sp3").innerText="enter your age "
//         document.querySelector("#sp3").style.display = "block"
        
//     } else if(inputText.value.length < 3 || inputText.value.length > 25){
//         inputText.classList.remove('error');
//         inputText.classList.add('change_border_color');
//         document.querySelector("#sp1").innerText="the character should be beetwen 3 & 25"
//         document.querySelector("#sp1").style.display = "block"
//         document.querySelector("#sp2").innerText="the character should be beetwen 3 & 25 "
//         document.querySelector("#sp2").style.display = "block"
//         document.querySelector("#sp3").innerText="the character should be beetwen 3 & 25 "
//         document.querySelector("#sp3").style.display = "block"
        
//     }
//     else{
//         inputText.classList.remove('change_border_color');
//         document.querySelector("#sp1").innerText=" "
        
//         document.querySelector("#sp2").innerText=" "
        
//         document.querySelector("#sp3").innerText=" "
       
        
//     }


// })



// document.querySelector('.btn-annuler').addEventListener("click",function(){
//     document.querySelector("SignUpForm").reset();
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
