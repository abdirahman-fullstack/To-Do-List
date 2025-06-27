function addTask() {
    const taskInput =
    document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText ==="") {
        alert("please enter a task.");
        return;
    }


    const taskList =
    document.getElementById("taskList");

    const li = document.createElement("li");

    li.textContent = taskText;

    const containerDiv = document.createElement('div')
    containerDiv.className = "container"
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "button-div"


    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete"
    completeBtn.classList = "complete-btn"
    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed")
    })
    // Creating delete button dynamically
    const deleteBtn =
    document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => taskList.removeChild(containerDiv);

    buttonDiv.appendChild(completeBtn)
    buttonDiv.appendChild(deleteBtn)


    containerDiv.appendChild(li);
    containerDiv.appendChild(buttonDiv)
    // li.appendChild(deleteBtn);
    taskList.appendChild(containerDiv);

    taskInput.value = "";
}
