async function createTask() {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;

  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  });

  if (response.ok) {
    const newTask = await response.json();
    addTaskToList(newTask);
  } else {
    alert("Failed to create task");
  }
}

function addTaskToList(task) {
  const tasksList = document.getElementById("tasksList");
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `<strong>${task.title}</strong>: ${task.description}`;
  tasksList.appendChild(taskItem);
}
