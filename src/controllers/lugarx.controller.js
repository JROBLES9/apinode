const LugaresService = require('../services/lugarx.service');
const service = new LugaresService();

const create = async ( req, res ) => {
    try { 
        const response = await service.create(req.body);
        res.json({ success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const personalDentro = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await service.personalDentro(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const ingreso = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.update(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const egreso = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.egreso(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = {
    create, personalDentro, ingreso, _delete, egreso
};
