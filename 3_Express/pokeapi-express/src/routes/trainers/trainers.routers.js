const express = require('express');
const trainerRouter = express.Router();
const TrainersServices = require('../../services/trainers/trainers.services');

const serviceTrainerObject = new TrainersServices();

trainerRouter.get("/", (req, res) => {
    const { page, size } = req.query;
    const allTrainers = serviceTrainerObject.find();
    let pagination = {};
    if (page && size) {
        pagination = { page, size };
	} 
    let data = {
        data: allTrainers,
        pagination
    }
	res.json(data);
});

trainerRouter.get("/trainer", (req, res) => {
    const obj = {
        id: 1,
        name: "David Palacios",
        edad: 24,
        region: 1,
    };
    res.json(obj);
});
trainerRouter.get("/trainer/:idTrainer/region/:idRegion", (req, res) => {
    const { idTrainer, idRegion } = req.params
    const obj = {
        id: idTrainer,
        name: "Ash Ketchum",
        age: 10,
        region: idRegion
    };
    res.json(obj);
});
trainerRouter.get("/trainers", (req, res) => {
    const { page, size } = req.query;
    if (page && size) {
        res.json({ page, size });
    } else {
        res.send('Parametros Obligatorios')
    }
});

trainerRouter.post('/trainer', (req, res) => {
    const body = req.body;
    res.json({
        message: 'created',
        data: body
    });
});
trainerRouter.patch('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    res.json({
        message: 'update partial',
        id,
        data: body
    })
});
trainerRouter.put('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    res.json({
        message: 'update all',
        id,
        data: body
    })
});

trainerRouter.delete('/', (req, res) => {
    const id = req.params.id;
    res.json({
        message: 'deleted',
        id,
    })
});

module.exports = trainerRouter

