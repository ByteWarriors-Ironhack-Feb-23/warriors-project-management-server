const router = require("express").Router();

// const mongoose = require("mongoose");

const Project = require("../models/Project.model");
const Task = require("../models/Task.model");



// POST /api/projects
router.post("/projects", (req, res, next) => {
  const { title, description } = req.body;

  Project.create({ title, description, tasks: [] })
    .then(response => res.status(201).json(response))
    .catch(err => {
        console.log("error creating a new project", err);
        res.status(500).json({
            message: "error creating a new project",
            error: err
        });
    })
});



module.exports = router;
