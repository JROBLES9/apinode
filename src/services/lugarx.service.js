const { models } = require('../libs/sequelize');

class LugaresService { 
  
    constructor() {}

    async find() {
      const res = await models.Lugarx.findAll();
      return res;
    }

    async personalDentro(id) {
      const res = await models.Lugarx.findOne({
        where: { id: id },
        attributes: ['numPersonas']
      });
      return res;
    }

    async create(data) {
      const res = await models.Lugarx.create(data);
      return res;
    }

    async update(id) {
      const model = await models.Lugarx.findOne({ where: { id: id } });
      const res = await model.update({
        numPersonas: model.numPersonas + 1
      });
      return res;
    }

    async egreso(id) {
      const model = await models.Lugarx.findOne({ where: { id: id } });
      const res = await model.update({
        numPersonas: model.numPersonas - 1
      });
      return res;
    }

    async delete(id) {
      const model = await models.Lugarx.findOne({ where: { id: id } });
      await model.destroy();
      return { deleted: true };
    }
  
  }
  
  module.exports = LugaresService;