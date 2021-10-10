const path = require("path");
const router = require("./api-routes");
const route = require("express").Router();

// home route
router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

// exercise route
router.get("/exercise", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

// stats route
router.get("/stats", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});


module.exports = router;