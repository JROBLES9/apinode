const express = require('express');
const router = express.Router(); 
const lugaresController = require('../controllers/lugarx.controller');

router
    .get('/personalDentro/:id', lugaresController.personalDentro )
    .post('/', lugaresController.create )
    .put('/ingreso/:id', lugaresController.ingreso )
    .put('/egreso/:id', lugaresController.egreso )
    .delete('/:id', lugaresController._delete );

module.exports = router;
