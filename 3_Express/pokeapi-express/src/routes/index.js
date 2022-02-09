const express = require('express');
const dummyRouters = require('./dummy/dummy.router');
const trainerRouters = require('./trainers/trainers.routers');
const pokemonRouters = require('./pokemones/pokemones.routers');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/dummys', dummyRouters)
    router.use('/trainers', trainerRouters)
    router.use('/pokemones', pokemonRouters)
}

module.exports = routerApi;