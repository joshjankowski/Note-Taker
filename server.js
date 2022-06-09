const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = 3001;

const app = express();

// GET request to pull notes.html
app.get('*', (req, res) => {
    // Let the client know that their request was received
    res.sendFile(path.join(__dirname, '/public/index.html'))
  
    // Log our request to the terminal
    console.info(`${req.method} request received`);
  });

// GET request to pull notes.html
app.get('/notes', (req, res) => {
  // Let the client know that their request was received
  res.sendFile(path.join(__dirname, '/public/notes.html'))

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

// GET request to read the db.json
app.get('/api/notes', (req, res) => {
  // Let the client know that their POST request was received

fs.readFile('./db/db.json', 'utf8', function(err, data){
  const newNote = req.body
  if(err){
    throw error;
  } else {
    const info = JSON.parse(data)
  }
})

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

app.post('/api/notes', (req, res) => {
  // Let the client know that their POST request was received
  fs.readFile('./db/db.json', 'utf8', function(err, data){
    const newNote = req.body
    if(err){
      throw error;
    } else {
      const info = JSON.parse(data);

      info.push(newNote)
      fs.writeFile('./db/db.json', JSON.stringify(info), (err) => {
        if(err) {
          throw error;
        } else {
          res.send(info)
        }
      })
    }
  })

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
