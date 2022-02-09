const express = require('express');
const trainerRouter = express.Router();

trainerRouter.get("/", (req, res) => {
    const obj = [{
        id: 1,
        name: "David Palacios",
        edad: 24,
        region: 1,
    },{
        id: '1',
        name: "Ash Ketchum",
        age: 10,
        region: '3'
    }];
    res.json(obj);
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
trainerRouter.get("/trainer/:idTrainer/regin/idRegion", (req, res) => {
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

trainerRouter.delete('/', (req,res) =>{
    const id = req.params.id;
    res.json({
        message: 'deleted',
        id,
    })
});
trainerRouter.put('/:id', (req,res)=>{
    const body = req.body;
    const id = req.params.id;
    res.json({
        message: 'update all',
        id,
        data: body
    })
});
trainerRouter.patch('/:id', (req,res)=>{
    const body = req.body;
    const id = req.params.id;
    res.json({
        message: 'update partial',
        id,
    })
});

module.exports = trainerRouter

