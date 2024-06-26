let openMenu = document.getElementById("hamburger");
let containerMenu = document.getElementById("containerMenu");
openMenu.addEventListener("click", (event)=>{
    containerMenu.classList.toggle("open")
})