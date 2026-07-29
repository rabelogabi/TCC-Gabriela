const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const pool = require("./db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Rota inicial
app.get("/", (req, res) => {
  res.send("API do Sistema de Monitoramento da Dengue funcionando!");
});

// Teste da conexão com o banco
app.get("/teste-banco", async (req, res) => {
  try {
    const resultado = await pool.query("SELECT NOW()");

    res.json({
      sucesso: true,
      mensagem: "Conectado ao PostgreSQL!",
      servidor: resultado.rows[0].now,
    });

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao conectar ao banco."
    });
  }
});

// Cadastro de usuário
app.post("/cadastro", async (req, res) => {

  const { nome, email, senha } = req.body;

  try {

    // Verifica se o e-mail já existe
    const usuarioExiste = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );

    if (usuarioExiste.rows.length > 0) {
      return res.status(400).json({
        mensagem: "E-mail já cadastrado."
      });
    }

    // Criptografa a senha
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    // Salva o usuário no banco
    await pool.query(
      `INSERT INTO usuarios (nome, email, senha)
       VALUES ($1, $2, $3)`,
      [nome, email, senhaCriptografada]
    );

    res.status(201).json({
      mensagem: "Usuário cadastrado com sucesso!"
    });

  } catch (erro) {

    console.error(erro);

    res.status(500).json({
      mensagem: "Erro ao cadastrar usuário."
    });

  }

});
// Login
app.post("/login", async (req, res) => {

    const { email, senha } = req.body;

    try {

        const resultado = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1",
            [email]
        );

        if (resultado.rows.length === 0) {
            return res.status(401).json({
                mensagem: "E-mail ou senha inválidos."
            });
        }

        const usuario = resultado.rows[0];

        const senhaCorreta = await bcrypt.compare(
            senha,
            usuario.senha
        );

        if (!senhaCorreta) {
            return res.status(401).json({
                mensagem: "E-mail ou senha inválidos."
            });
        }

        res.status(200).json({
            mensagem: "Login realizado com sucesso!",
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                perfil: usuario.perfil
            }
        });

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            mensagem: "Erro ao realizar login."
        });

    }

});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});