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


function creatLi(task){
    let ul = document.getElementById("listTask") ;
    let li = document.createElement("li") ;  
    li.textContent = task ; 

    let checkIcon = document.createElement("i");
  checkIcon.className = "fas fa-check-circle";
  checkIcon.style.color = "green";
  checkIcon.style.cursor = "pointer";
  checkIcon.style.marginRight = "10px";

  checkIcon.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
    li.style.opacity = "0.6";
    li.classList.toggle("completed");
    playClap();
  });

  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash";
  deleteIcon.style.color = "red";
  deleteIcon.style.cursor = "pointer";

  deleteIcon.addEventListener("click", function () {
    play();
    li.remove();
  });

  let iconsDiv = document.createElement("div");
  iconsDiv.appendChild(checkIcon);
  iconsDiv.appendChild(deleteIcon);

  li.appendChild(iconsDiv);
  ul.appendChild(li);
  return li;

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

function playClap() {
  document.getElementById("clap").play();
}
function play() {
  document.getElementById("no-luck").play();
}
