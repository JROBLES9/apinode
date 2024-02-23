const express = require('express'); 

const personsRouter = require('./person.router');
const lugaresRouter = require('./lugarx.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router); 
  router.use('/persons', personsRouter);
  router.use('/lugares', lugaresRouter);
}

module.exports = routerApi;
