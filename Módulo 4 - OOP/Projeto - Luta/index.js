const express = require("express");
const path = require("path");

const app = express();

// Serve arquivos estáticos da pasta atual
app.use(express.static(__dirname));

// Rota padrão para retornar o index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
