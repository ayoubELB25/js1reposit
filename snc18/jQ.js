document.title = ("this is jQuery TEST")

document.getElementById('btn-hide').addEventListener('click', function(){
    $("#title-1").hide()
    $(".title-2").hide()
})

document.getElementById('btn-show').addEventListener('click', function(){
    $("#title-1").show()
    $(".title-2").show()
})

/////////////////////__hiding the first and last item__/////////////////////

document.getElementById('btn-hide-l').addEventListener('click', function(){
    $(".liste li:nth-child(1)").hide()
    $(".liste li:nth-child(4)").hide()


    ////////////////////////////////////////////////////////////////////////
})

/////////////////////__showing the first and last item__/////////////////////

document.getElementById('btn-show-l').addEventListener('click', function(){
    $(".liste li:nth-child(1)").show()
    $(".liste li:nth-child(4)").show()


    ////////////////////////////////////////////////////////////////////////
})

////////////////////////////////////////////////////////////////////////

document.getElementById('btn-clr').addEventListener('click', function(){
    console.log("adding the color")
    $("#colorbar").addClass("toRed")
    let consoleTEST = document.getElementById("colorbar");
    let pattern = /[a-zA-Z]/;
    if(pattern.test(consoleTEST.textContent)){
        console.log("yes")
    }
    else{
        console.log("no")
    }

})

document.getElementById('clr-rmv').addEventListener("click",function(){
    console.log("removing the color")
    $("#colorbar").removeClass("toRed")
    let consoleTEST = document.getElementById("colorbar");
    let pattern = /[a-zA-Z]/;
    if(pattern.test(consoleTEST.textContent)){
        console.log("yes")
    }
    else{
        console.log("no")
    }

})



///////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $("#btn-ajouter").click(function(){
        console.log("you clicked this button")
    })
})



