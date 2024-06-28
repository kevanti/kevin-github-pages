//Menu
let todos = document.getElementById("todos");
let noReponsive = document.getElementById("noReponsive");
let reponsive = document.getElementById("Reponsive");
let game = document.getElementById("Game");

//Sections
let allProjects = document.getElementById("workAll");
let sectionNoReponsive = document.getElementById("sectionNoReponsive");
let sectionReponsive = document.getElementById("sectionReponsive");
let sectionGame = document.getElementById("sectionGame");

//todos
todos.addEventListener("click", (event)=>{
    event.preventDefault();

    sectionNoReponsive.classList.add("hidden");
    allProjects.classList.remove("hidden");
    sectionGame.classList.add("hidden");

    todos.style.color = "#0cb7f2";
    noReponsive.style.color= '#44566C';
    reponsive.style.color = "#44566C";
    game.style.color = "#44566C";
});

//No reponsive
noReponsive.addEventListener("click", (event)=>{
    event.preventDefault();

    sectionNoReponsive.classList.remove("hidden");
    allProjects.classList.add("hidden");
    sectionReponsive.classList.add("hidden");
    sectionGame.classList.add("hidden");

    todos.style.color= '#44566C';
    noReponsive.style.color= "#0cb7f2";
    reponsive.style.color = "#44566C";
    game.style.color = "#44566C";
});

//Responsive
reponsive.addEventListener("click", (event)=>{
    event.preventDefault();

    allProjects.classList.add("hidden");
    sectionNoReponsive.classList.add("hidden");
    sectionReponsive.classList.remove("hidden");
    sectionGame.classList.add("hidden");

    reponsive.style.color = "#0cb7f2";
    todos.style.color = "#44566C";
    noReponsive.style.color = "#44566C";
    game.style.color = "#44566C";

})
game.addEventListener("click", (event)=>{
    event.preventDefault();

    allProjects.classList.add("hidden");
    sectionNoReponsive.classList.add("hidden");
    sectionReponsive.classList.add("hidden");
    sectionGame.classList.remove("hidden");

    todos.style.color = "#44566C";
    noReponsive.style.color = "#44566C";
    reponsive.style.color = "#44566C";
    game.style.color = "#0cb7f2";
    
})