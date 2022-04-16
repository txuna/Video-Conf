let rooms = document.getElementsByClassName("room__line");

function close_popup(){
    let btn = document.querySelector(".container")
    btn.style.display="none";
}

function open_popup(){
    let btn = document.querySelector(".container")
    btn.style.display="flex";
}

function open_alert(){
    alert("Invalid Password");
    close_popup();
}

function open_conference_constructure(){
    let conf_popup = document.querySelector(".constructure__container") 
    conf_popup.style.display = "flex";
}

function close_conference_constructure(){
    let conf_popup = document.querySelector(".constructure__container") 
    conf_popup.style.display = "none";
}

function enter_room(){
    location.href = "session.html"
}

function init(){
    /*
    [...rooms].forEach(room => {
        room.addEventListener("click", enter_room);
    });
    */
    close_conference_constructure()
    close_popup()
}

init();