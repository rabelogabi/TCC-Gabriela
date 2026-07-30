const bcrypt = require("bcrypt");

async function gerarSenha() {
  const senha = "123456";

  const senhaCriptografada = await bcrypt.hash(senha, 10);

  console.log(senhaCriptografada);
}

gerarSenha();