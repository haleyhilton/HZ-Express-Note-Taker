const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require ('path');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

//GET /notes >> notes.html
app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
//GET * >> index.html (in lieu of 404 route)
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


//GET /api/notes read db.json
//POST /api/notes add to db.json
app.post('/api/notes', (req, res) => {
    const newNote = createNote(req.body, allNotes);
    res.json(newNote);
});
// GET Route for index.html



function createNote() {
    const newNote = body;
}


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);