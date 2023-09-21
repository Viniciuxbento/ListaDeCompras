let contador = 0
let limpar = document.querySelector('.buttom-limpar')

limpar.addEventListener('click',()=>{
    clearAll()
})

async function pegarValor() {
    let input = document.getElementById('inputItem');
    let valorInput = input.value;
    contador += 1;

    await criarLista(valorInput);

    input.value = '';

    return contador;
}

async function excluirItem(id) {
    let elemento = document.querySelector(`[data-id="${id}"]`);
    if (elemento) {
        elemento.remove();
        contador -= 1
    }
}

function clearAll() {
    let articles = document.getElementsByClassName('article');

    // Convertemos a lista de elementos em um array para iteração segura
    let articlesArray = Array.from(articles);

    articlesArray.forEach(article => {
        while (article.firstChild) {
            article.removeChild(article.firstChild); // Remove todos os filhos do elemento
        }
    });
}




async function criarLista(valor) {
    if (valor === '') {
        alert("Insira algo!");
    } else {
        let article = document.querySelector('.article');
        let novoItem = document.createElement('div');
        let novoItemNome = document.createElement('h1');
        let icone = document.createElement('span');

        novoItem.classList.add('divTarefas');
        novoItemNome.classList.add('estiloItem');
        icone.classList.add('material-symbols-outlined');
        icone.id = contador;

        novoItem.appendChild(novoItemNome);
        novoItem.appendChild(icone);
        article.appendChild(novoItem);

        novoItemNome.textContent =   ' - ' + valor;
        icone.textContent = 'delete';

        novoItem.setAttribute('data-id', `div-${contador}`);

       
        icone.addEventListener('click', () => {
            excluirItem(novoItem.getAttribute('data-id')); 
        });
    }
}

