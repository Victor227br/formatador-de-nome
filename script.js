let input = document.querySelector('#input')
let list = document.querySelector('#listaNome')

function formatName(){
    if (input.value.trim() === "") {
        return;
    } 

    let item = document.createElement('li')
    let name = document.createElement('h2')
    item.className = ('Item');
    name.className = ('nameItem')
    item.appendChild(name);
    list.appendChild(item);
    item.innerHTML = ('- ') + input.value;
}

function addName (e) {
    if (e.key === 'Enter'){ 
        formatName();
        input.value = ""; 
    }
}

    input.addEventListener('keyup', addName)

    function deleteList(){
        list.innerHTML = '';
    }

