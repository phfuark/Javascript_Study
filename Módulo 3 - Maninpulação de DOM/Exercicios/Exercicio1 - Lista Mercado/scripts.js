function addItem(event) {
    const ul = document.querySelector("ul");
    const li = document.createElement('li');
    const getLi = ul.getElementsByTagName('li');
    const pag = document.querySelector('body');
    const liCount = getLi.length;

    if (event.key === 'Enter'){
        li.innerHTML = input.value;
        ul.appendChild(li);
        input.value = '';
    } 
    if (liCount % 2 == 1){
        pag.style.backgroundColor = '#00F'
    } else{
        pag.style.backgroundColor = '#F00'     
    }
}

const input = document.querySelector('input');
input.addEventListener('keypress', addItem);