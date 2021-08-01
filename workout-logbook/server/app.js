let express = require('express');
let app = express();
let sequelize = require('./db');
let workoutlog = require('./controllers/WorkoutLogController');

sequelize.sync();

app.use('/WorkoutLogController', workoutlog)

app.listen(3000, function() {
    console.log('App is listening on port 3000');
})