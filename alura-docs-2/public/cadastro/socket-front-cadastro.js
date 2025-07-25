const Socket = io();

function emitirCadastrarUsuario(dados) {
  Socket.emit("cadastrar_usuario", dados);
}

Socket.on("cadastro_sucesso", () => alert("✅ Cadastro realizado com sucesso!"));
Socket.on("cadastro_erro", () => alert("❌ Erro ao cadastrar usuário"));
Socket.on("usuario_ja_existente", () => alert(`👤 Usuario já existe`));

export { emitirCadastrarUsuario };
