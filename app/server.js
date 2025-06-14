const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/notes');

const Note = mongoose.model('Note', { text: String });

app.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.post('/', async (req, res) => {
  const note = new Note({ text: req.body.text });
  await note.save();
  res.send('Note saved');
});

app.listen(3000, () => console.log('Server running on port 3000'));
