const express = require('express');
const fs = require('fs');
const path = require ('path');
const dataStuff = require('./db/db.json')
const PORT = process.env.PORT || 3001;
const app = express();

const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


app.use('/', apiRoutes)
app.use('/', htmlRoutes)


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);