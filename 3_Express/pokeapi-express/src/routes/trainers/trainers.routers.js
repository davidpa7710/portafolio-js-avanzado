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
trainerRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    const trainer = serviceTrainerObject.findOne(id)
    res.json(trainer);
});

trainerRouter.post('/', (req, res) => {
    const body = req.body;
    serviceTrainerObject.create(body);
    res.json({
        message: 'created',
        data: body
    });
});
trainerRouter.patch('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    serviceTrainerObject.editPartial(id, body);
    res.json({
        message: 'updated partial',
        id,
        data: body
    });
});

trainerRouter.put('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    serviceTrainerObject.updateComplete(id, body);
    res.json({
        message: 'updated all',
        id,
        data: body
    });
});

trainerRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    serviceTrainerObject.delete(id);
    res.json({
        message: 'deleted',
        id
    });
});

module.exports = trainerRouter

