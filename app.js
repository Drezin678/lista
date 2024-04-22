let tasks = [];

function addTask() {
 const taskInput = document.getElementById("taskInput");
 const taskText = taskInput.value.trim();

 if (taskText !== "") {
  tasks.push({ text: taskText, completed: false });
  taskInput.value = "";
  renderTasks();
 }
}

function removeTask(index) {
 tasks.splice(index, 1);
 renderTasks();
}

function toggleTask(index) {
 tasks[index].completed = !tasks[index].completed;
 renderTasks();
}

function renderTasks() {
 const taskList = document.getElementById("taskList");
 taskList.innerHTML = "";

 tasks.forEach((task, index) => {
  const li = document.createElement("li");
  li.className = "taskItem" + (task.completed ? " completed" : "");
  li.textContent = task.text;

  // Criar um novo elemento div para agrupar os botões
  const buttonDiv = document.createElement("div");
  buttonDiv.id = 'btns'

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remover";
  removeButton.onclick = () => removeTask(index);
  buttonDiv.appendChild(removeButton); // Adicionar o botão de remoção ao elemento div


  const toggleButton = document.createElement("button");
  toggleButton.textContent = task.completed ? "Desmarcar" : "Concluído";
  toggleButton.onclick = () => toggleTask(index);
  buttonDiv.appendChild(toggleButton); // Adicionar o botão de alternância ao elemento div

  li.appendChild(buttonDiv); // Adicionar o elemento div contendo os botões ao item de lista

  taskList.appendChild(li); // Adicionar o item de lista à lista de tarefas
 });
}
