import express from 'express';
import cors from 'cors';
import fs from 'fs'

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  });

app.get('/games', (req, res) => {
  res.setHeader("Content-type", "application/json;charset=UTF-8");
  fs.readFile('data/games.json', function (err, data) {
    res.send(data);
  });
});


app.get('/consoles', (req, res) => {
  res.setHeader("Content-type", "application/json;charset=UTF-8");
  fs.readFile('data/console.json', function (err, data) {
    res.send(data);
  });
});

app.get('/publishers', (req, res) => {
  res.setHeader("Content-type", "application/json;charset=UTF-8");
  fs.readFile('data/publisher.json', function (err, data) {
    res.send(data);
  });
});

// Maria 

app.get('/hamster-supplies', (req, res) => {
  res.setHeader("Content-type", "application/json;charset=UTF-8");
  fs.readFile('js/hamster.json', function (err, data) {
    res.send(data);
  });
});


//Category main page intro text
app.get('/home-page', (req, res) => {
  res.setHeader("Content-type", "application/json;chartset=UTF-8");
  fs.readFile('data/motor-intro.json', function(err, data) {
    res.send(data);
  });
});

app.get('/motorcycles', (req, res) => {
  res.setHeader("Content-type", "application/json;chartset=UTF-8");
  fs.readFile('data/motor-sub.json', function(err, data) {
    res.send(data);
  });
});

app.get('/accessories', (req, res) => {
  res.setHeader("Content-type", "application/json;chartset=UTF-8");
  fs.readFile('data/motor-acc.json', function(err, data) {
    res.send(data);
  });
});

app.get('/license', (req, res) => {
  res.setHeader("Content-type", "application/json;chartset=UTF-8");
  fs.readFile('data/motor-license.json', function(err, data) {
    res.send(data);
  });
});

app.get('/gear', (req, res) => {
  res.setHeader("Content-type", "application/json;chartset=UTF-8");
  fs.readFile('data/motor-gear.json', function(err, data) {
    res.send(data);
  });
});