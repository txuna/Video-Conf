const message_input = document.querySelector(".write__message > textarea"); 
const message_btn = document.querySelector(".blank__message > button"); 

const message_container = document.querySelector(".show__message");
const screen_container = document.querySelector(".screen__container");

let players = [
    {
        'name' : 'tuuna',
        'main' : true, 
    },{
        'name' : 'testuser',
        'main' : false, 
    },{
        'name' : 'admin',
        'main' : false, 
    },{
        'name' : 'user',
        'main' : false,
    },{
        'name' : 'user123',
        'main' : false,
    }
]

/*
<div class="screen">
    <i class="fas fa-circle"></i>
    <i class="fas fa-expand"></i>
    <div class="video"></div>
    <span>1</span>
</div>
*/

const CIRCLE_ICON = `<i class="fas fa-circle"></i>`;
const EXPAND_ICON = `<i class="fas fa-expand" id="expand"></i>`;

function create_player_screen(){
    let index = 1;
    players.forEach(player => {
        let screen_div = document.createElement("div"); 
        screen_div.classList.add("screen");

        let video_div = document.createElement("div"); 
        video_div.classList.add("video");

        let index_span = document.createElement("span"); 

        screen_div.innerHTML += CIRCLE_ICON; 
        screen_div.innerHTML += EXPAND_ICON; 
        screen_div.appendChild(video_div);

        // EXPAND btn addEventListener -> expand_screen()
        let expand_icon =screen_div.querySelector("i:nth-child(2)");
        expand_icon.__index = index;
        expand_icon.addEventListener("click", function(event){
            expand_screen(event)
        })

        if(player['main'] == true){
            screen_div.classList.add("screen__expand");
        }
        player['index'] = index; // 인덱스 설정
        index_span.innerText = index.toString();
        index+=1
        screen_div.appendChild(index_span);
        screen_container.appendChild(screen_div);
    })
}

function get_player(index){
    return players.find(e=>{
        if(e['index'] == index) return e;
    })
}

function get_main_player(){
    return players.find(e=>{
        if(e['main'] == true) return e;
    })
}

// 현재 main인 스크린을 찾고 교환 
function expand_screen(event){
    let before_player; 
    let after_player; 
    before_player = get_main_player();
    after_player = get_player(event.target.__index);
    if(before_player === undefined || after_player === undefined){
        return;
    }
    //모든 화면 체인지 방식 
    before_player['main'] = false;
    after_player['main'] = true;

    before_screen = document.querySelector(".screen__expand"); 
    before_screen.classList.remove("screen__expand");
    event.target.parentElement.classList.add("screen__expand")


    // 원하는 화면 2개만 체인지 방식
    /*
    for(let screen of screen_container.children){
        if(screen.querySelector("span")){
            
        }
    }
    */
}

/*
<div class="message">
    <span>Hannah</span>
    <span>New Message from hannah!</span>
    <span>11:32 PM</span>
</div>
*/
function send_msg(){
    if(message_input.value === ""){
        return;
    }
    let msg = message_input.value; 
    let msg_div = document.createElement("div"); 
    msg_div.classList.add("message"); 

    let name_span = document.createElement("span"); 
    let content_span = document.createElement("span"); 
    let timestamp_span = document.createElement("span"); 

    name_span.innerText = "tuuna"; 
    content_span.innerText = msg; 
    let date = new Date();
    // 22.4.16 19:23:23
    timestamp_span.innerText = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    msg_div.appendChild(name_span);
    msg_div.appendChild(content_span); 
    msg_div.appendChild(timestamp_span);
    message_container.appendChild(msg_div);
    message_input.value = ""
}

function check_enter(){
    let key = window.event.keyCode; 
    if(key === 13){
        send_msg()
        window.event.preventDefault(); //중첩 엔터 방지 
        return false;
    }
    return true;
}

function init(){
    message_btn.addEventListener("click", send_msg);
    create_player_screen();
}


// 인원수에 따라 css 속성 수정
function resize_camera_area(){

}

init();