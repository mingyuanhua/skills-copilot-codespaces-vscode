// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comment.id = comments.length;
  comments.push(comment);
  res.json(comment);
});

// Delete comment
app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === id);

  if (!comment) {
    res.sendStatus(404);
  } else {
    comments = comments.filter(comment => comment.id !== id);
    res.sendStatus(204);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Comments
let comments = [
  {
    id: 0,
