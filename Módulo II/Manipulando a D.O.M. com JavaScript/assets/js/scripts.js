
function toggleDarkMode(){
    h1.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode:hover");
    footer.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    newText();
}

function newText(){
    if(h1.classList.contains("dark-mode")){
        h1.innerHTML = "Light Mode OFF";
    }else{
        h1.innerHTML = "Light Mode ON"
    }
}

const h1 = document.getElementById("page-title");
const button = document.getElementById("mode-selector");
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];

button.addEventListener('click', toggleDarkMode);
