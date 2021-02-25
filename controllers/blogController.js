const express = require('express')
const router = express.Router()

// // ============
// // DATABASE
// // ============
const Blog = require('../models/blog.js')

// // ======================
// // RESTful ROUTES "INDUCES"
// // ======================

// Index
router.get('/', (req, res) => {
    Blog.find({}, (err, allBlogs) => {
        if (err) {
            res.send(err)
        } else {
            res.render('BlogPage', {
                blogs: allBlogs
            })
        }
    });
});

// Show 
router.get('/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            res.send(err)
        } else {
            res.render('Show', {
                item: foundBlog
            })
        }
    });
});

module.exports = router;