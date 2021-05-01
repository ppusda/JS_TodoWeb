const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleclick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    
    // if(hasClass) {
    //     title.classList.remove(CLICKED_CLASS);
    // }else{
    //     title.classList.add(CLICKED_CLASS);
    // }

    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleclick);
}
init();

// function handleOffline() {
//     console.log("bye");
// }

// function handleOnline() {
//     console.log("welcome back~~")
// }

// window.addEventListener('offline', handleOffline);
// window.addEventListener('online', handleOnline);

// title.innerHTML = "Hi! HTML! this is js!";
// document.title = "JS POWER!";
// console.log(title);
