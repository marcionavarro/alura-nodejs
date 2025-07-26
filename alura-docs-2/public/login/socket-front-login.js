const Socket = io();

function emitirAutenticarUsuario(dados) {
  Socket.emit("autenticar_usuario", dados);
}

Socket.on("autenticacao_sucesso", () => {
  alert("✅ Usuário autenticado com sucesso!");
  window.location.href = "/";
});
Socket.on("autenticacao_erro", () => alert("❌ Erro ao autenticar usuário"));
Socket.on("usuario_nao_encontrado", () => alert(`👤❌ Usuario não encontrado`));

export { emitirAutenticarUsuario };
