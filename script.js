const taskInput =
document.getElementById("taskInput");

const taskDate =
document.getElementById("taskDate");

const priority =
document.getElementById("priority");

const addBtn =
document.getElementById("addBtn");

const taskList =
document.getElementById("taskList");

const totalTasks =
document.getElementById("totalTasks");

const completedTasks =
document.getElementById("completedTasks");

const emptyMessage =
document.getElementById("emptyMessage");

let total = 0;
let completed = 0;

addBtn.addEventListener(
"click",
addTask
);

function updateStats(){

    totalTasks.textContent =
    `Tasks: ${total}`;

    completedTasks.textContent =
    `Completed: ${completed}`;

    emptyMessage.style.display =
    total === 0
    ? "block"
    : "none";
}

function addTask(){

    const text =
    taskInput.value.trim();

    if(text === ""){

        alert("Enter a task");

        return;
    }

    total++;

    const task =
    document.createElement("div");

    task.classList.add("task");

    const level =
    priority.value.toLowerCase();

    task.innerHTML =

    `
    <div class="task-details">

        <h3>${text}</h3>

        <p>
            📅 ${taskDate.value || "No Date"}
        </p>

        <span class="priority ${level}">
            ${priority.value}
        </span>

    </div>

    <div class="actions">

        <button class="complete-btn">
            ✓
        </button>

        <button class="edit-btn">
            ✏
        </button>

        <button class="delete-btn">
            🗑
        </button>

    </div>
    `;

    taskList.appendChild(task);

    const completeBtn =
    task.querySelector(".complete-btn");

    const editBtn =
    task.querySelector(".edit-btn");

    const deleteBtn =
    task.querySelector(".delete-btn");

    completeBtn.addEventListener(
    "click",
    ()=>{

        if(
        !task.classList.contains(
        "completed"
        )
        ){
            completed++;
        }
        else{
            completed--;
        }

        task.classList.toggle(
        "completed"
        );

        updateStats();
    });

    editBtn.addEventListener(
    "click",
    ()=>{

        const title =
        task.querySelector("h3");

        const updated =
        prompt(
        "Edit Task",
        title.textContent
        );

        if(updated){

            title.textContent =
            updated;
        }
    });

    deleteBtn.addEventListener(
    "click",
    ()=>{

        if(
        task.classList.contains(
        "completed"
        )
        ){
            completed--;
        }

        total--;

        task.remove();

        updateStats();
    });

    taskInput.value="";
    taskDate.value="";

    updateStats();
}

updateStats();