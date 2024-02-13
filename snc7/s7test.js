// const inputElement = document.querySelector('input[name="inpt"]')

// inputElement.value = 20 



b = Number(document.querySelector('#inpt2').value = 5);
console.log(b) 

c = Number(document.querySelector('#inpt3').value = 10) ;
console.log(c) 

a = Number(document.querySelector('#inpt1').value = c + b);
console.log(a)


let ColorChanger = () => {
    if (b==10) {
        document.body.style.backgroundColor = "black"
    }
    else if (c==10) {
        document.body.style.backgroundColor = "blue"
    }
    else {
        document.body.style.backgroundColor = "red"
    }
}
console.log(ColorChanger())  // extremly necessary
    




