const form = document.getElementById("form")
let ValidarForm= false
let linha = '<tr>';


/* Validar formulario*/
form.addEventListener('submit', function(e){
  e.preventDefault();

  linhasTabela()
  AdicionarDadosTabela()

  
})
/* criar as linhas da tabela */
function linhasTabela(){
  const inputNome= document.getElementById("nome")
  const inputNumero= document.getElementById("numero")
  const inputEmail= document.getElementById("email")

  
  linha += `<td> ${inputNome.value} </td>`
  linha +=`<td> ${inputNumero.value} </td>`
  linha +=`<td> ${inputEmail.value} </td>`
  linha += '</tr>';
}
/* Adicionar dados na tabela */

function AdicionarDadosTabela() {
  const corpoTabela= document.querySelector("tbody")
  corpoTabela.innerHTML=linha;
}



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
