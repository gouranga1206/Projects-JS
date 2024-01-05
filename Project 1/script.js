let button = document.querySelector("#btn");
let box = document.getElementById("box");
let isToggle = true;
button.addEventListener("click", ()=>{
    if(isToggle){
        box.style.display ="block";
        isToggle =false;
    }
    else{
        box.style.display="none";
        isToggle=true;
    }
    
}
)