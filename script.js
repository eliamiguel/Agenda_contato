const form = document.getElementById("form");
const inputNome= document.getElementById("nome");
  const inputNumero= document.getElementById("numero");
  const inputEmail= document.getElementById("email");
const totalContato= document.getElementById("QuantidadeNome")

let ValidarForm= false
let nome= [];
let numero= [];
let email= [];
let linha = '<tr>';
let linhas= " "; 


/* Validar formulario*/
form.addEventListener('submit', function(e){
  e.preventDefault();

linhasTabela();
AdicionarDadosTabela();
QuantidadeContatoAdicionado();
  
  


  
})
/* criar as linhas da tabela */
function linhasTabela(){
  if (nome.includes(inputNome.value)){
    alert('Contato já adicionado!')
  } else {
  
    nome.push(inputNome.value)
    numero.push(parseFloat(inputNumero.value))
    email.push(inputEmail.value)

    linha += `<td> ${inputNome.value} </td>`
    linha +=`<td> ${inputNumero.value} </td>`
    linha +=`<td> ${inputEmail.value} </td>`
    linha += '</tr>';
    linhas += linha;
  }
  inputNome.value="";
  inputNumero.value=" ";
  inputEmail.value=" ";
}
/* Adicionar dados na tabela */

function AdicionarDadosTabela() {
  linhas=linha;
  const corpoTabela= document.querySelector("tbody");
  corpoTabela.innerHTML=linhas;

  
}
/* Total de contato adicionado */

function QuantidadeContatoAdicionado(){
let somaNumero= 0
  for ( c=0; c < numero.length; c ++){
    somaNumero+= numero [c]
  }
  totalContato.innerHTML= (c)
}

