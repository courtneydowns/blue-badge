require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');
let workoutlog = require('./controllers/WorkoutLogController');
let user = require('./controllers/UserController')

sequelize.sync();

app.use(express.json());

app.use('/user', user);

app.use('/workoutlog', workoutlog)

app.listen(3000, function() {
    console.log('App is listening on port 3000');
})