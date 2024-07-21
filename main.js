const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


addButton.addEventListener('click', function createTask(event) {
    event.preventDefault();
    let newTaskValue = taskInput.value;
    let newTaskElement = document.createElement('li');
    newTaskElement.textContent = newTaskValue;
    taskList.appendChild(newTaskElement);
    taskInput.value = '';
});

taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addButton.click();
    }
});

taskList.addEventListener('click', function checkTask(event) {
    if (event.target.tagName === 'LI')
        event.target.classList.toggle('completed');
});

