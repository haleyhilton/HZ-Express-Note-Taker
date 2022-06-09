const express = require('express');
const fs = require('fs');
const path = require ('path');
const dataStuff = require('./db/db.json')
const PORT = process.env.PORT || 3001;
const app = express();

const htmlRoutes = require('./routes/htmlRoutes')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


app.use('/', htmlRoutes)

//POST /api/notes add to db.json
// app.post('/api/notes', (req, res) => {
//     dataStuff.push(req.body)
//     res.json(dataStuff)

// });

console.log(path.join(__dirname, './public/notes.html'))


  
//  router.get('/', (req, res) =>
//    res.sendFile(path.join(__dirname, './public/index.html'))
//   );
  
  

// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, './public/index.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);