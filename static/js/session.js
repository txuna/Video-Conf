const message_input = document.querySelector(".chat__input > input"); 
const message_btn = document.querySelector(".chat__input > button"); 

const screen_container = document.querySelector(".screen__container");

let players = [
    {
        'name' : 'tuuna',
        'main' : true, 
    },
    {
        'name' : 'testuser',
        'main' : false, 
    },
    {
        'name' : 'admin',
        'main' : false, 
    },
    {
        'name' : 'user',
        'main' : false,
    },
    {
        'name' : 'user123',
        'main' : false,
    }
]

/*
<div class="screen">
    <i class="fas fa-circle"></i>
    <i class="fas fa-expand"></i>
    <div class="video"></div>
</div>
*/

const CIRCLE_ICON = `<i class="fas fa-circle"></i>`;
const EXPAND_ICON = `<i class="fas fa-expand"></i>`;

function craete_player_screen(){
    players.forEach(player => {
        let screen_div = document.createElement("div"); 
        screen_div.classList.add("screen");

        let video_div = document.createElement("div"); 
        video_div.classList.add("video");
        screen_div.innerHTML += CIRCLE_ICON; 
        screen_div.innerHTML += EXPAND_ICON; 
        screen_div.appendChild(video_div);
        // EXPAND btn addEventListener -> expand_screen()
        if(player['main'] == true){
            screen_div.classList.add("screen__expand");
        }
        screen_container.appendChild(screen_div);
    })
}

function expand_screen(event){
    console.log("asd")
}


function send_msg(){
    
}


function init(){
    craete_player_screen();
}


// 인원수에 따라 css 속성 수정
function resize_camera_area(){

}

init();