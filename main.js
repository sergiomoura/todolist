// Captura de elementos
const btSalvar = document.querySelector('#form button[type=submit]');
const inputTexto = document.getElementById("texto");
const lista = document.getElementById("task-list");

// Definições iniciais
const chaveLocal = 'boxtarefas';
let tarefas = [];

const addNovaTarefa = (texto) => {
    
    // 1 - Criar um objeto tarefa: {texto:"texto digitado", feita: false}
    let tarefa = {
        texto,
        feita: false
    }

    // 2 - Adicionar esse objeto no array de tarefas;
    tarefas.push(tarefa);

    // 3 - salvar o array de tarefas no localStorage!
    localStorage.setItem(chaveLocal, JSON.stringify(tarefas));

    // 4 - Retornar a tarefa criada
    return tarefa;

}

const showTarefa = (tarefa) => {

    // 4.1 Criar o novo li
    let li = document.createElement('li');

    // 4.2 Adicionar o conteúdo do li
    li.innerHTML = `
        <input type="checkbox" id="check_1">
        <label for="check_1">${tarefa.texto}</label>
        <i class="material-icons">delete</i>
    `

    // 4.3 Adicionar esse novo li na lista
    lista.appendChild(li);
}

const onBtSalvarClick = (evento) => {

    evento.preventDefault();
    
    let texto = inputTexto.value;

    let tarefa = addNovaTarefa(texto);

    showTarefa(tarefa);   
    
}

const onWindowLoad = (evento) => {
    // Carregar as tarefas do local storage caso haja...
    tarefas = JSON.parse(localStorage.getItem(chaveLocal));
    if(tarefas === null) {
        tarefas = [];
        localStorage.setItem(chaveLocal, '[]');
    }

    // Mostrar as tarefas carregadas...
    for (const t of tarefas) {
        showTarefa(t);
    }
}

// Conexão do evento à função (event handler)
btSalvar.addEventListener('click', onBtSalvarClick)
window.addEventListener('load', onWindowLoad)

