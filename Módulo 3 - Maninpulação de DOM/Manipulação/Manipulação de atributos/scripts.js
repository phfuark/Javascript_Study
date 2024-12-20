function clickBotao() {
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');

    console.log(`${input}`);

    console.log( input.getAttribute('placeholder') );

    if ( input.hasAttribute('type') ){
        console.log(`Tem o atributo 'type'`);
    }
    else{
        console.log(`Não tem o atribuito 'type'`);
    }

    // input.setAttribute(`placeholder`, `Placeholder alterado (setAttribute)`);

    if (input.getAttribute(`type`) === 'text'){
        input.setAttribute(`type`, `password`);
        botao.innerHTML = 'Mostrar senha';
        // let botao = document.querySelector('.botao');
        // botao.innerHTML = `Mostrar senha`;
    }
    else{
        // botao.innerHTML = `Ocultar senha`;
        input.setAttribute(`type`, `text`);
        botao.innerHTML = 'Ocultar senha';
    }
}   