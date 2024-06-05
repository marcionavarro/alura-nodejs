const dataSource = require('../database/models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros(where = {}) {
    return dataSource[this.model].findAll({ where: {...where} });
  }

  async pegaRegistrosPorEscopo(escopo){
    return dataSource[this.model].scope(escopo).findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async pegaUmRegistro(where) {
    return dataSource[this.model].findOne({
      where: { ...where }
    });
  }

  async criaRegistro(dadosRegistro) {
    return dataSource[this.model].create(dadosRegistro);
  }

  async atualizaRegistro(dadosAtualizados, where){
    const listaDeRegistrosAtualizado = dataSource[this.model]
      .update(dadosAtualizados, {where:  { ...where } });

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