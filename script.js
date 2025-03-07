let input = document.querySelector('#input')
let lista = document.querySelector('#listaNome')
let listaFormatar = document.querySelector('#listaFormatarNome')

function listaNome(){
    if (input.value.trim() === "") {
        return;
    } 

    let item = document.createElement('li')
    let nome = document.createElement('h2')
    item.className = ('Item');
    nome.className = ('nameItem')
    item.appendChild(nome);
    lista.appendChild(item);
    item.innerHTML = ('- ') + input.value;
}

 function formatarNome (){
    const nomeFormatado = nome.split(" ");
    for(let i = 0; i < nomeFormatado.length; i++){
        nomeFormatado[i] = nomeFormatado[i][0].toUpperCase() + nomeFormatado[i].substr(1);
}
    nomeFormatado.join(" ");
    nomeFormatado.className('nomeFormatado')

    listaFormatar.appendChild(nomeFormatado)
    nomeFormatado.innerHTML =('- ') + listaFormatar
 }

function adicionarNome (e) {
    if (e.key === 'Enter'){ 
        listaNome();
        input.value = ""; 
    }
}
    input.addEventListener('keyup', adicionarNome)

    function deletarLista(){
        lista.innerHTML = '';
    }

