const { Model, DataTypes, Sequelize } = require('sequelize');

const LUGAR_TABLE = 'lugar';

class Lugar extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: LUGAR_TABLE,
            modelName: 'Lugarx',
            timestamps: true
        }
    }
} 

const LugarSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'nombre'
    },
    numPersonas:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'numPersonas'
    } 
}
  
module.exports = { Lugar, LugarSchema };