import NaoEncontrado from "../erros/NaoEncontrado.js";

function manipuladorde404(req, res, next){
  const erro404 = new NaoEncontrado();
  next(erro404);
}

export default manipuladorde404;