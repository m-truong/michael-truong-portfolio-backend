const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({ 
    title:  { type: String, required: true },
    date: String,
    description: String,
    image: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;