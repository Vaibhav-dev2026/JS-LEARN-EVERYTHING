const modal = document.getElementById("task-modal");
const toggleModal = document.getElementById("toggle-modal");
const addTaskBtn = document.getElementById("add-task");

const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-desc");

const columns = {
  todo: document.getElementById("todo"),
  progress: document.getElementById("progress"),
  done: document.getElementById("done"),
};

let tasks = JSON.parse(localStorage.getItem("kanbanTasks")) || [];
let draggedTaskId = null;

/* ---------- Modal ---------- */
toggleModal.onclick = () => modal.classList.add("active");
modal.querySelector(".bg").onclick = () => modal.classList.remove("active");

/* ---------- Add Task ---------- */
addTaskBtn.onclick = () => {
  if (!titleInput.value.trim()) return alert("Enter title");

  const task = {
    id: Date.now(),
    title: titleInput.value,
    desc: descInput.value,
    status: "todo",
  };

  tasks.push(task);
  saveAndRender();
  modal.classList.remove("active");
  titleInput.value = descInput.value = "";
};

/* ---------- Render ---------- */
function render() {
  Object.values(columns).forEach(col => {
    col.querySelectorAll(".task").forEach(t => t.remove());
  });

  tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";
    div.draggable = true;
    div.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.desc}</p>
      <button>Delete</button>
    `;

    div.ondragstart = () => draggedTaskId = task.id;
    div.querySelector("button").onclick = () => deleteTask(task.id);

    columns[task.status].appendChild(div);
  });

  updateCounts();
}

/* ---------- Drag Drop ---------- */
Object.keys(columns).forEach(status => {
  const col = columns[status];

  col.ondragover = e => e.preventDefault();
  col.ondrop = () => {
    const task = tasks.find(t => t.id === draggedTaskId);
    task.status = status;
    saveAndRender();
  };
});

/* ---------- Helpers ---------- */
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveAndRender();
}

function updateCounts() {
  Object.keys(columns).forEach(status => {
    columns[status].querySelector(".count").innerText =
      tasks.filter(t => t.status === status).length;
  });
}

function saveAndRender() {
  localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  render();
}

render();
