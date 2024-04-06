const dataSource = require('../database/models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro(dadosRegistro) {
    return dataSource[this.model].create(dadosRegistro);
  }

  async atualizaRegistro(dadosAtualizados, id){
    const listaDeRegistrosAtualizado = dataSource[this.model]
      .update(dadosAtualizados, { where: { id : id}});

    if(listaDeRegistrosAtualizado[0] === 0){
      return false;
    }

    return true;
  }

  async excluirRegistro(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;