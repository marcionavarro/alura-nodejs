const Controller = require('./Controller.js');
const CurosServices = require('../services/CursoServices.js');

const curosServices = new CurosServices();

class CurosController extends Controller {
  constructor() {
    super(curosServices);
  }
}

module.exports = CurosController;