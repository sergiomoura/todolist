// Captura de elementos
const btSalvar = document.querySelector('#form button[type=submit]');
const inputTexto = document.getElementById("texto");
const lista = document.getElementById("task-list");

// Definição das funções que serão executadas (event handlers)
const onBtSalvarClick = (evento) => {

    evento.preventDefault();

    // 1 - Capturar o texto digitado no campo
    let texto = inputTexto.value;

    // 2 - Criar um objeto tarefa: {texto:"texto digitado", feita: false}

    // 3 - Adicionar esse objeto no array de tarefas;

    // 4 - Adicionar a tarefa na DOM
    // 4.1 Criar o novo li
    let li = document.createElement('li');

    // 4.2 Adicionar o conteúdo do li
    li.innerHTML = `
        <input type="checkbox" id="check_1">
        <label for="check_1">${texto}</label>
        <i class="material-icons">delete</i>
    `

    // 4.3 Adicionar esse novo li na lista
    lista.appendChild(li);
}

const onInputTextoKeyDown = (evento) => {
   
}

// Conexão do evento à função (event handler)
// Forma 1 (feia):
btSalvar.onclick = onBtSalvarClick;
inputTexto.onkeydown = onInputTextoKeyDown;