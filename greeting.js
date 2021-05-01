const form = document.querySelector(".js-form"),
    greeting = document.querySelector(".js-greetings"),
    input = form.querySelector("input");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

const greetings_content = ['Hello, ', 'Have a good day, ', 'Nice to meet you, ', 'I hope you have a great time, ', 'I wish you a very happy, ', 'All the best wishes to you, '];

function selectGreeting(){
    const genGreeting = Math.floor(Math.random() * greetings_content.length);
    return genGreeting;
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handlesubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForname(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handlesubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    const greetingNum = selectGreeting();
    greeting.innerText = `${greetings_content[greetingNum]}${text}!`;
}

function loadname(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForname();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadname();
}

init();