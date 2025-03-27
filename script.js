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
    nome.className  = "nameItem"


    
    divItem.appendChild(nome)
    divItem.appendChild(BtnExcluir)
    item.appendChild(divItem)
    lista.appendChild(item);
    item.innerHTML = input.value;
}

 function formatarNome (){
    
    
    const nomeFormatado = document.querySelectorAll = ('.nameItem').split(" ")
    for(let i = 0; i < nomeFormatado.length; i++){
        nomeFormatado[i] = nomeFormatado[i][0].toUpperCase() + nomeFormatado[i].substr(1);

    nomeFormatado.join(" ");
   
    let itemFormatado = document.createElement('li')
    let novoNome = document.createElement('h2')
    novoNome.className =  'novoNome'
    novoNome.innerText = nomeFormatado.value
  
    console.log('Novonome' , nomeFormatado)

    itemFormatado.appendChild(novoNome)
    listaFormatar.appendChild(itemFormatado)

    console.log(novoNome ,'novoNome')
    console.log(nomeFormatado , 'nomeFormatado')

 }
 //}

function formatarLista(){
 
//  for(let element of nome){
//     console.log(element)
 }

//pegar os elementos de toda listaNome e passar para e passar para listaFormatar
//passar para lista formatar
 //formartar todos os itens 
 // Tirar "de, da, do" da regra de 
}

function adicionarNome (e) {
    if (e.key === 'Enter'){ 
        listaNome();
        input.value = ""; 
    }
}


    input.addEventListener('keyup', adicionarNome)


function deletarListaFormatada(){
    formatarNome.innerHTML = ''
}

function deletarLista(){
        lista.innerHTML = ''; 
    }

