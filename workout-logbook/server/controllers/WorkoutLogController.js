let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const { route } = require('./UserController');
const WorkoutLog = require('../db').import('../models/log');

/* ***************************
 ***  CREATE WORKOUT LOG ***
 ************************** */
router.post('/create', validateSession, (req, res) => {
    const logEntry = {
        description: req.body.description,
        definition: req.body.definition,
        result: req.body.definition,
        owner_id: req.body.owner_id
    }
    WorkoutLog.create(logEntry)
    .then(workoutlog => res.status(200).json(workoutlog))
    .catch(err => res.status(500).json({ error: err }))
})

/* ***************************
 *** GET ALL LOGS FOR USER ***
 ************************** */
 router.get('/:username', (req, res) => {
    let username = req.params.username
    WorkoutLog.findAll({where: {username: username}})
    .then(workoutlogs => res.status(200).json(workoutlogs))
    .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;