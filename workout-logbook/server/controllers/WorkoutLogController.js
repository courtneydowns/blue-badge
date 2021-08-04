let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const { route } = require('./UserController');
const WorkoutLog = require('../db').import('../models/log');

/* ***************************
 ***  CREATE WORKOUT LOG ***
 ************************** */
router.post('/', validateSession, (req, res) => {
    const logEntry = {
        description: req.body.description,
        definition: req.body.definition,
        result: req.body.result,
        owner_id: req.user.id
    }
    WorkoutLog.create(logEntry)
    .then(workoutlog => res.status(200).json(workoutlog))
    .catch(err => res.status(500).json({ error: err }))
})
/* ***************************
 *** GET ALL LOGS FOR USER ***
 ************************** */
 router.get('/', validateSession, (req, res) => {
    let userid  = req.user.id
    WorkoutLog.findAll({
        where: {owner_id: userid}
    })
    .then(workoutlogs => res.status(200).json(workoutlogs))
    .catch(err => res.status(500).json({ error: err }))
});

/* ***************************
 *** GET ALL LOGS BY ID ***
 ************************** */

  router.get('/:id', validateSession, (req, res) => {
    let userid  = req.user.id
    WorkoutLog.findAll({
        where: {owner_id: userid}
    })
    .then(workoutlogs => res.status(200).json(workoutlogs))
    .catch(err => res.status(500).json({ error: err }))
});

/* ************************************
 *** UPDATE INDIVIDUAL LOGS BY USER ***
 *********************************** */
router.put('/:id', validateSession, (req, res)=> {
  const updateWorkoutLog = {
     description: req.body.description,
     definition: req.body.definition,
     result: req.body.result 
  };
  const query = { where: { id: req.params.id, owner_id: req.user.id }} 
  
  WorkoutLog.update(updateWorkoutLog, query)
  .then((workoutlog) => res.status(200).json(workoutlog))
  .catch((err) => res.status(500).json({ error: err }));
});

/* *************************
*** DELETE LOG ***
************************** */
router.delete("/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id, owner_id: req.user.id }};

    WorkoutLog.destroy(query)
    .then(() => res.status(200).json({ message: "Workout Log Removed" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;