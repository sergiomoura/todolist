// Captura de elementos
const btSalvar = document.querySelector('#form button[type=submit]');
const inputTexto = document.getElementById("texto");
const lista = document.getElementById("task-list");

// Definições iniciais
const chaveLocal = 'boxtarefas';
let tarefas = [];

const addNovaTarefa = (texto) => {

    // 0 - Calcular o novo id
    let novoId;
    if(tarefas.length == 0){
        novoId = 1
    } else {
        novoId = tarefas[tarefas.length - 1].id + 1;
    }
    
    // 1 - Criar um objeto tarefa: {texto:"texto digitado", feita: false}
    let tarefa = {
        id: novoId,
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

const removerTarefa = (id) =>{

    // Localiza no array de tarefas aquela que tem o id a ser removido
    let pos = tarefas.findIndex(t => t.id == id);

    // Remove a tarefa da posição encontrada
    tarefas.splice(pos, 1);

    // Guardando no localStorage o array de tarefas sem a tarefa de id
    localStorage.setItem(chaveLocal, JSON.stringify(tarefas));

    // Remover a tarefa da DOM.
    let liDaTarefa = document.getElementById(`li_${id}`);
    liDaTarefa.remove();
}

const alterarTarefa = (id) => {
    // Encontra a tarefa que tenha o id procurado
    let tarefa = tarefas.find(t => t.id == id);

    // Altera o status dessa tarefa
    tarefa.feita = !tarefa.feita;

    // Salvo o array de tarefas no localStorage
    localStorage.setItem(chaveLocal, JSON.stringify(tarefas));
}

const showTarefa = (tarefa) => {

    // 4.1 Criar o novo li
    let li = document.createElement('li');
    li.setAttribute('id',`li_${tarefa.id}`);

    let checked = tarefa.feita ? 'checked' : '';

    // 4.2 Adicionar o conteúdo do li
    li.innerHTML = `
        <input type="checkbox" ${checked} id="check_${tarefa.id}" onclick="alterarTarefa(${tarefa.id})">
        <label for="check_${tarefa.id}">${tarefa.texto}</label>
        <i class="material-icons" onclick="removerTarefa(${tarefa.id})">delete</i>
    `

    // 4.3 Adicionar esse novo li na lista
    lista.appendChild(li);
}

const onBtSalvarClick = (evento) => {

    evento.preventDefault();
    
    let texto = inputTexto.value;

    let tarefa = addNovaTarefa(texto);

    showTarefa(tarefa);

    inputTexto.value = "";
    
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

    // Dando foco ao campo de texto
    inputTexto.focus();
}

// Conexão do evento à função (event handler)
btSalvar.addEventListener('click', onBtSalvarClick)
window.addEventListener('load', onWindowLoad)

/**
 * Questões de Usabilidade:
 * 1 - O campo já deve iniciar com foco
 * 2 - Limpar o campo sempre que uma tarefa nova seja adicionada
 * 
 * Questões de funcionalidade
 * 
 * 1 - Marcar tarefa como feita
 * 2 - Remover uma tarefa
 * 
 * Cada tarefa deve ter um id (identificador único para a tarefa)
 * 
 *  */ 


