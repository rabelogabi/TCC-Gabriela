const bcrypt = require("bcrypt");

async function testar() {
    const senha = "123456";

    const senhaBanco = "$2b$10$S9DJHjflcvSASQhU8h0tJ.7Seapz8TlqkH0ac7sTyDUrYRoFXMh1W";

    const resultado = await bcrypt.compare(
        senha,
        senhaBanco
    );

    console.log("Senha correta:", resultado);
}

testar();