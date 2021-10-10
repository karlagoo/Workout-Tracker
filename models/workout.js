const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {},
        weight: {},
        sets: {},
        reps: {},
        duration: {},
        // cardio only:
        distance: {}
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;