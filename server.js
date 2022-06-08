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

//GET * >> index.html

//GET /api/notes read db.json
//POST /api/notes add to db.json