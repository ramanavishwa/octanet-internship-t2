function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
            <button onclick="toggleComplete(this)">Complete</button>
        </div>
    `;
    taskList.appendChild(newTask);
    taskInput.value = '';
}

function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}

function editTask(button) {
    const task = button.parentElement.parentElement;
    const taskText = task.querySelector('span').innerText;
    const newTaskText = prompt('Edit task:', taskText);
    if (newTaskText !== null) {
        task.querySelector('span').innerText = newTaskText;
    }
}

function toggleComplete(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle('completed');
}