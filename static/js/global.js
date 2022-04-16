let menubarBtn = document.querySelector("#global__navbar > div > div"); 
let menu = document.querySelector(".navbar__menubar");
function toggle_menu(){
    if(menu.style.display === "none"){
        menu.style.display = "flex";
    }else{
        menu.style.display = "none";
    }
}

function init(){
    menubarBtn.addEventListener("click", toggle_menu);
}

init();