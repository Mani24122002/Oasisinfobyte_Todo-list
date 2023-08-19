const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';

    taskItem.querySelector('.delete').addEventListener('click', () => {
      taskList.removeChild(taskItem);
    });
  }
});
