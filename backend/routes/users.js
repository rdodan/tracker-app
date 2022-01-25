const express = require('express');
const router = express.Router();
const userSchema = require('../models/user');

router.get('/', async (req, res) => {
    try {
        const getAllUsers = await userSchema.find();
        res.json(getAllUsers);
    } catch(err) {
        res.json({message: err.message});
    }
})


router.post('/add', async (req, res) => {
    const {username} = req.body;
    const postUserSchema = new userSchema({
        username: username,
    })
    try {
        await postUserSchema.save();
        res.json(postUserSchema);
    } catch(err) {
        res.json({message: err.message});
    }
})



module.exports = router;