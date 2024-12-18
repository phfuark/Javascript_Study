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

console.log(`${personagem.nome} tem: `);
console.log(`Força: ${personagem.caracteristicas.forca};\nMagia: ${personagem.caracteristicas.magia};\nInteligência: ${personagem.caracteristicas.inteligencia[0]}.\n`);