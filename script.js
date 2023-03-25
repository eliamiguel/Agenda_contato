/*const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  if (taskInput.value !== '') {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
      <p>${taskInput.value}</p>
      <button class="delete-btn">Excluir</button>
    `;
    taskList.appendChild(task);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentElement.remove();
  }
});*/
