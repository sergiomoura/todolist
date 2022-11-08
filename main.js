// Console.log executando no browser
// console.log("Hello, World!");

// Objeto document representação da página no JS
console.log(document);

const lista = document.getElementById("task-list");
console.log(lista);

// Com o elemento em mãos podemos
// manipular seu conteúdo, aparência
// e comportamento;

// Manipulação de conteúdo:
// lista.innerHTML: Conteúdo HTML do elemento
// lista.appendChild(): Função para adicionar elemento
// lista.removeChild(): Função que remove um elemento dele
lista.innerHTML =
                lista.innerHTML + `
                <li id="task_1">
                    <input type="checkbox" id="check_1">
                    <label for="check_1">Uma tarefa MFP Bacanuda!</label>
                    <i class="material-icons">delete</i>
                </li>`;

// Queremos agora remover o primeiro item da lista...
// lista.removeChild(oFilho): Remove um filho...
let primeiroLi = document.querySelector("#task-list li:nth-child(1)");
lista.removeChild(primeiroLi); // Pai removendo o filho
// primeiroLi.remove(); // O próprio filho se removendo

let itensDaLista = document.querySelectorAll("#task-list li");
console.log(itensDaLista);

// Fazer com que o botão SUMA!!!
// Capturar o botão...
let btAddTask = document.querySelector('#form button[type=submit]');

// Remover o botão... ou só fazer com que ele não apareça
// btAddTask.remove();

// Mudando a cor de fundo... aparências em geral...
btAddTask.style = "background-color: rgba(0, 0, 0, 0.5)";
btAddTask.classList.add('sucesso');

btAddTask.parentNode.style = "background-color: #0000FF; padding: 20px"

// btAddTask.className






