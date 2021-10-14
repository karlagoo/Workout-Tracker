const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
        type:{
            type: String,
            trim: true,
            required: "Must Enter Exercise Type"
        },
        name: {
            type: String,
            trim: true,
            required: "Must Enter Exercise Name"
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        // cardio only:
        distance: {
            type: Number
        }
    }
],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;