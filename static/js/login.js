let userid = document.querySelector("#userid"); 
let userpw = document.querySelector("#userpw"); 
let loginBtn = document.querySelector("#loginBtn");
let alert_container = document.querySelector(".alert__container");

/*
ALERT
    <div class="alert">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <strong>Warning!</strong> <span>패스워드는 9자리 이상의 특수문자와 영문자를 포함하여 주시길 바랍니다.</span>
    </div>
*/

function popup(type, msg){
    alert_container.innerHTML="";
    let div_element = document.createElement("div"); 
    div_element.classList.add("alert"); 
    
    let span_element = document.createElement("span");
    span_element.innerText = msg;

    let strong_element = document.createElement("strong"); 
    strong_element.innerText = type;

    div_element.innerHTML = `<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>`
    div_element.appendChild(strong_element);
    div_element.appendChild(span_element); 
    alert_container.appendChild(div_element);
}

function login_request(){
    if(userid.value === ''){
        popup("Danger! "," 사용자 계정을 입력해주시길 바랍니다.");
        return; 
    }

    if(userpw.value === ''){
        popup("Danger! ", " 사용자 패스워드를 입력해주시길 바랍니다.");
        return; 
    }

    console.log(userid.value)
    console.log(userpw.value)
    return;
}

function init(){
    loginBtn.addEventListener("click", login_request);
}

init();