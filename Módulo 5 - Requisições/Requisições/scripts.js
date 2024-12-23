function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    })
}

botao = document.querySelector('button').addEventListener('click', clicou); 