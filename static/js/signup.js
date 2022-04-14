let userid = document.querySelector("#userid");
let userpw = document.querySelector("#userpw");
let userpw2 = document.querySelector("#userpw2");
let userph = document.querySelector("#userph");
let user_rank = document.querySelector("#urank");
let user_department = document.querySelector("#department");
let user_position = document.querySelector("#position");
let username = document.querySelector("#username");

let signupBtn = document.querySelector("#signupBtn");
let alert_container = document.querySelector(".alert__container");

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

function signup_request(){ 
    if(userid.value === ''){
        popup("Danger! ", " 사용자 계정을 입력해주시길 바랍니다!");  
        return;
    }
    if(userpw.value === ''){
        popup("Danger! ", " 사용자 패스워드를 입력해주시길 바랍니다!");  
        return;
    }
    if(userpw2.value === ''){
        popup("Danger! ", " 사용자 검증 패스워드를 입력해주시길 바랍니다!");  
        return;
    }
    if(userpw.value !== userpw2.value){
        popup("Danger!", " 패스워드가 일치하지 않습니다.");  
        return;
    }
    if(user_rank.value === ''){
        popup("Danger! ", " 사용자 계급을 선택하시길 바랍니다.");  
        return;
    }
    if(username.value === ''){
        popup("Danger! ", " 사용자 성함을 입력하시길 바랍니다.");
        return;  
    }
    if(user_department.value === ''){
        popup("Danger! ", " 사용자 소속 부서를 선택하시길 바랍니다.");  
        return;
    }
    if(user_position.value === ''){
        popup("Danger! ", " 사용자 부서/직책을 입력하시길 바랍니다.");  
        return;
    }
    console.log(`
        userid : ${userid.value}
        userpw : ${userpw.value} 
        rank : ${user_rank.value} 
        name : ${username.value} 
        department : ${user_department.value}
        position : ${user_position.value}
    `)
    
    return;
}

function init(){
    signupBtn.addEventListener("click", signup_request)
}

init();
