const express = require('express');
const router = express.Router();
const exerciseSchema = require('../models/exercise');

router.get('/', async (req, res) => {
    try {
        const getAllExercises = await exerciseSchema.find();
        res.json(getAllExercises);
    } catch(err) {
        res.json({message: err.message});
    }
})


router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const getAllExercisesById = await exerciseSchema.findById(id);
        res.json(getAllExercisesById);
    } catch(err) {
        res.json({message: err.message});
    }
})

router.put('/update/:id', async (req, res) => {
    const {id} = req.params;
    const {username, description, duration, date} = req.body;
    try {
       const findExerciseById = await exerciseSchema.findById(id);
       await findExerciseById.update({
        username,
        description, 
        duration, 
        date,
       })
       res.json(findExerciseById);
    } catch(err) {
        res.json({message: err.message});
    }
})



router.post('/add', async (req, res) => {
    const {username, description, duration, date} = req.body;
    const postUserExercise = new exerciseSchema({
        username,
        description, 
        duration, 
        date,
    })
    try {
        await postUserExercise.save();
        res.json(postUserExercise);
    } catch(err) {
        res.json({message: err.message});
    }
})



router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const getAllExercisesById = await exerciseSchema.findById(id);
        await getAllExercisesById.remove();
        res.json('Object deleted!');
    } catch(err) {
        res.json({message: err.message});
    }
})


module.exports = router;