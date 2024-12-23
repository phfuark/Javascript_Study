async function clicou() {
// GET,   POST,   PUT,     DELETE  
// pegar, postar, alterar, deletar

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    alert(`O primeiro título do Json é: ${json[0].title}`);
        
    alert('Clicou!')
}

async function inserir() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: 'Título de Teste',
                    body: 'Corpo de Teste',
                    userId: 2
                })

            }
        )

        let json = await response.json();
        console.log(json);
    } catch {
        console.error('Requisição falhou!');    
    }
}

botao = document.querySelector('#button').addEventListener('click', clicou); 
botao = document.querySelector('#inserir').addEventListener('click', inserir); 