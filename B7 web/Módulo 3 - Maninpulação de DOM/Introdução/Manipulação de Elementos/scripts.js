function clickBotao() {
    const teste = document.querySelector("#teste1");
    console.log(teste.children);
    console.log(teste.children[0].children);

    const ul = teste.querySelector(`ul`);
    console.log(ul);

    console.log(ul.innerHTML);
    ul.innerHTML += `<li> Item 3 (adicionado) </li>`;

    ul.children[0].innerHTML = `<li>Item 1 (Substituído)</li>`
}
