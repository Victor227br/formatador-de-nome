let input = document.querySelector('#input')
let lista = document.querySelector('#listaNome')
let listaFormatar = document.querySelector('#listaFormatarNome')


function listaNome(){
    if (input.value.trim() === "") { 
        return;
    
} 
    let item = document.createElement('li')
    item.className = "Item"
    let divItem = document.createElement('div')
    divItem.className = "divItem"
    let divBtnFormatar = document.createElement('div')
    divBtnFormatar.className = "divBtnFormatar"
    let btnFormatar = document.createElement('button')
    btnFormatar.className = "btnFormatarNome"
    btnFormatar.innerHTML = 'Formatar'
    let nome = document.createElement('h2')
    nome.className  = "nameItem" 

    divBtnFormatar.appendChild(btnFormatar) 
    divItem.appendChild(nome)
    divItem.appendChild(divBtnFormatar)
    item.appendChild(divItem)
    lista.appendChild(item);
    nome.innerHTML = input.value;

    btnFormatar.addEventListener('click', function() {
        criadorDeNovoItem(nome);
        item.innerHTML = " "
    })
}

function adicionarNome (e) {
    if (e.key === 'Enter'){ 
        listaNome()
        input.value = ""; 
    }
}
    input.addEventListener('keyup', adicionarNome)

function deletarListaFormatada(){
    listaFormatar.innerHTML = '';
}

function deletarLista(){
    lista.innerHTML = ''; 
}

function formatarNomeComRegras(texto) {
    const palavrasMinusculas = ['da', 'de', 'do', 'das', 'dos']
    let nomesArray = texto.trim().toLowerCase().split(" ")
    
    return nomesArray.map(palavra => {
    if (!palavrasMinusculas.includes(palavra)) {
            return palavra.charAt(0).toUpperCase() + palavra.slice(1)
    } else {
        return palavra
} })
    .join(" ")
}

function criadorDeNovoItem(nome) {
    let texto = nome.textContent
    let resultado = formatarNomeComRegras(texto)

    let itemFormatado = document.createElement('li')
    itemFormatado.className = "ItemFormatado"

    let resultadoNome = document.createElement('h2')
    resultadoNome.className = "nameItemFormatado"
    resultadoNome.textContent = resultado

    itemFormatado.appendChild(resultadoNome)
    listaFormatar.appendChild(itemFormatado)
}

function criadorDaNovaLista() {
    let listaPai = document.getElementById("listaNome")
    let liFilhos = listaPai.getElementsByClassName("nameItem")

    for (let nomesLista of liFilhos) {
        let texto = nomesLista.textContent
        let listaResultado = formatarNomeComRegras(texto)

        let itemListaFormatado = document.createElement('li')
        itemListaFormatado.className = "ItemFormatado"

        let titulo = document.createElement('h2')
        titulo.className = "nameItemFormatado"
        titulo.textContent = listaResultado

        itemListaFormatado.appendChild(titulo)
        listaFormatar.appendChild(itemListaFormatado)
    }

    lista.innerHTML = '';
}


 