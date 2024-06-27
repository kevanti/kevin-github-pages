let allProjects = document.getElementById("workAll");

//Menu
let noReponsive = document.getElementById("noReponsive");
let todos = document.getElementById("todos");

let sectionNoReponsive = document.getElementById("sectionNoReponsive")


//No reponsive
noReponsive.addEventListener("click", (event)=>{
    event.preventDefault();

    sectionNoReponsive.classList.remove("hidden");
    allProjects.classList.add("hidden");
    noReponsive.style.color= "#0cb7f2";
    todos.style.color= '#44566C';
});

//todos
todos.addEventListener("click", (event)=>{
    event.preventDefault();

    sectionNoReponsive.classList.add("hidden");
    allProjects.classList.remove("hidden");
    noReponsive.style.color= '#44566C';
    todos.style.color = "#0cb7f2";
});