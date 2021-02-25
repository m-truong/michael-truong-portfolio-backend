const express = require('express')
const router = express.Router()

// ============
// DATABASE
// ============
const Project = require('../models/project.js')

// ======================
// RESTful ROUTES "INDUCES"
// ======================

// Index
router.get('/', (req, res) => {
    Project.find({}, (err, allProjects) => {
        if (err) {
            res.send(err)
        } else {
            res.render('ProjectPage', {
                projects: allProjects
            })
        }
    });
});

// Show 
router.get('/:id', (req, res) => {
    Project.findById(req.params.id, (err, foundProject) => {
        if (err) {
            res.send(err)
        } else {
            res.render('Show', {
                item: foundProject
            })
        }
    });
});

module.exports = router;