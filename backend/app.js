const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();


//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Connect to DB
const db_url = process.env.db_url;
mongoose.connect(db_url)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));


//Routes
const exerciseRoutes = require('./routes/exercises');
app.use('/exercises', exerciseRoutes);
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);



const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log('Server is running on port ' + PORT + '...');
});



