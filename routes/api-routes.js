const router = require("express").Router();
const Workout = require("../models/workout");

// get all workouts
router.get("/api/workouts", (req, res) =>{
    Workout.aggregate([
      { $addFields: { totalDuration: {
        $sum: '$exercises.duration',
      }, 
    }, 
  }, 
    ])
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
      });
});

// creating a new workout
router.post("/api/workouts", ({body}, res) => {
    Workout.create({exercises: body})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// editing a workout
router.put("/api/workouts/:id", (req, res) =>{
    Workout.findOneAndUpdate(
        {_id: req.params.id},
        {$push: {exercises: req.body}},
        { new: true, runValidators: true }
    ).then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
      });
})

// complete a workout
router.delete("/api/workouts/:id", (req, res) =>{
  Workout.findByIdAndDelete(
    req.body.id
  ).then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.status(400).json(err);
    });
})

  module.exports = router;