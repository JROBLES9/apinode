const { Person, PersonSchema } = require('./persons.model');
const { Lugar, LugarSchema } = require('./lugarx.model');

function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
    Lugar.init(LugarSchema, Lugar.config(sequelize));
}

module.exports = setupModels;
