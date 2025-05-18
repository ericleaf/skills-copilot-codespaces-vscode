// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Sample comments data
let comments = [
    { id: 1, text: "This is a comment", author: "User1" },
    { id: 2, text: "This is another comment", author: "User2" }
];

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Add a new comment
app.post('/comments', (req, res) => {
    const newComment = {
        id: comments.length + 1,
        text: req.body.text,