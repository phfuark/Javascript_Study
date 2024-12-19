function clickBotao() {
    const teste = document.querySelector("#teste1");
    const ul = teste.querySelector(`ul`);


    let newH3 = document.createElement('h3');
    newH3.innerHTML = 'h3 adicionado depois de ul'
    ul.after(newH3);

    let newUl = document.createElement('ul');

    for (let i = 1; i<=5; i++){
        let newLi = document.createElement('li');
        newLi.innerHTML = `Item ${i}`;
        newUl.append(newLi);
    }

    ul.after(newUl);
}
