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
    let BtnExcluir = document.createElement('button')
    BtnExcluir.className = "BtnExcluirLi"
    let nome = document.createElement('h2')
    nome.innerHTML = (" ") + input.value
    nome.className  = "nameItem"

    divItem.appendChild(nome)
    divItem.appendChild(BtnExcluir)
    item.appendChild(divItem)
    lista.appendChild(item);
    console.log
    // item.innerHTML = ('- ') + input.value;
}

 function formatarNome (){
    const nomeFormatado = document.querySelector = ('nameItem').split(" ")
    for(let i = 0; i < nomeFormatado.length; i++){
        nomeFormatado[i] = nomeFormatado[i][0].toUpperCase() + nomeFormatado[i].substr(1);

    nomeFormatado.join(" ");
    nomeFormatado.className('nomeFormatado')
    listaFormatar.appendChild(nomeFormatado)
    nomeFormatado.innerHTML = ('- ') + listaFormatar
 }
 }

function adicionarNome (e) {
    if (e.key === 'Enter'){ 
        listaNome();
        input.value = ""; 
    }
}
    input.addEventListener('keyup', adicionarNome)

function deletarListaFormatada(){
    listaFormatar.innerHTML = ''
}

    function deletarLista(){
        lista.innerHTML = '';
    }

 