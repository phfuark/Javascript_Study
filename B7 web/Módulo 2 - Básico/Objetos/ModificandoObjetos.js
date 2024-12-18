let personagem = {
    nome: 'phfuark',
    idade: 17,
    pais: 'Brasil',
    caracteristicas: {
        forca: 30,
        magia: 20,
        inteligencia: [45, 40]
    }
};

personagem.nome = 'ph.fuark';
personagem.caracteristicas.forca += 5;

console.log(`${personagem.nome} tem força: ${personagem.caracteristicas.forca}`);
