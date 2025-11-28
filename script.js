function getTask(){
    let task = document.getElementById("task").value ; 
    if(task.trim()!= ""){
        creatLi(task) ; 
        document.getElementById("task").value = "";
    }
    else{
        alert("please enter a task") ; 
    }
}


function creatLi(taskText, completed = false){
    let ul = document.getElementById("listTask") ;
    let li = document.createElement("li") ;  
    li.textContent = taskText ; 

    // for loading page
    if(completed){
        li.classList.add("completed");
        li.style.textDecoration = "line-through";
        li.style.opacity = "0.6";
    }

    let checkIcon = document.createElement("i");
    checkIcon.className = "fas fa-check-circle";
    checkIcon.style.color = "green";
    checkIcon.style.cursor = "pointer";
    checkIcon.style.marginRight = "10px";

    checkIcon.addEventListener("click", function () {
        li.classList.toggle("completed");
        if (li.classList.contains("completed")) {
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.6";
        } else {
            li.style.textDecoration = "none";
            li.style.opacity = "1";
        }
        saveTasks();
    });

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash";
    deleteIcon.style.color = "red";
    deleteIcon.style.cursor = "pointer";

    deleteIcon.addEventListener("click", function () {
        li.remove();
        saveTasks();
    });

    let iconsDiv = document.createElement("div");
    iconsDiv.appendChild(checkIcon);
    iconsDiv.appendChild(deleteIcon);

    li.appendChild(iconsDiv);
    ul.appendChild(li);

    saveTasks(); 
}

function saveTasks(){
    const tasks = [];
    document.querySelectorAll("#listTask li").forEach(li => {
        let taskText = li.firstChild.textContent; 
        let completed = li.classList.contains("completed");
        tasks.push({text: taskText, completed: completed});
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function filterTasks(type) {
  const tasks = document.querySelectorAll("#listTask li");

  tasks.forEach(task => {
    if (type === "all") {
      task.style.display = "flex";
    } else if (type === "completed") {
      task.style.display = task.classList.contains("completed") ? "flex" : "none";
    } else if (type === "pending") {
      task.style.display = !task.classList.contains("completed") ? "flex" : "none";
    }
  });
}


function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => creatLi(task.text, task.completed));
}

window.addEventListener("load", loadTasks);
