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
        formatador(nome);
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
    formatarNome.innerHTML = '';
}

function deletarLista(){
    lista.innerHTML = ''; 
}

function formatador(nome){
    let nomesArray = []
    nomesArray = nome.trim().split(/[\s]+/).map(nome => nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase())
    let resultado = nomesArray.join(" ")

    let itemFormatado = document.createElement('li');
    itemFormatado.className = "ItemFormatado";
    let nomeFormatado = document.createElement('h2');
    nomeFormatado.className = "nameItemFormatado";
    resultado.innerHTML = nomeFormatado;
    
    itemFormatado.appendChild(nomeFormatado);
    listaFormatar.appendChild(itemFormatado)

    console.log(resultado)
}
 
function ListaNomesFormatados(){

}

 
    //pegar o valor do nome(h2) ou armazenar os valores do input 
    //O problema está no input dbugar amanhã
    //pegar o nome do input 
    //separar os nomes do input
    //iterar os nomes 
    //capitalizar cada um deles 
    //atenção aos nomes 'de'



    // let resultadoH2 = document.createElement('h2')
    // resultadoH2.textContent = resultado
    // let itemFormatado = document.createElement('li')
    // let divResultado = document.getElementById("resultado");
//     divResultado.appendChild(resultadoH2);
//    itemFormatado.appendChild(divResultado)
//    listaFormatar.appendChild(itemFormatado)
    
