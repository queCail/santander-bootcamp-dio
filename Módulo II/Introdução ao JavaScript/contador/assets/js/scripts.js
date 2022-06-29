var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

document.getElementById("adicionar").addEventListener("click", increment);
document.getElementById("subtrair").addEventListener("click", decrement);

function setColor(){
    if (currentNumber < 0){
        currentNumberWrapper.style.color = "red";
    }else{
        currentNumberWrapper.style.color = "black";
    }
}

function increment() {
    if (currentNumber < 10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    setColor();
}

function decrement() {
    if (currentNumber > -10){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    setColor();
}

