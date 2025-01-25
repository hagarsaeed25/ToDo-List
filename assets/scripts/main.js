document.getElementById("toggle-theme").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/dark.webp";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/ligth.webp";
  }
};
let task = "";
document.getElementById("add-task-btn").onclick = () => {
  let inputTask = document.getElementById("task-input").value;
  if (inputTask.trim() !== "") { 
    task += `<li>${inputTask}</li>`; 
    document.getElementById("task-list").innerHTML = task; 
    document.getElementById("task-input").value = ""; 
  }
};