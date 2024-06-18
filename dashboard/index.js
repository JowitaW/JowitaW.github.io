import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/housing.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'housing.html'));
});

app.get('/housing.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'housing.json'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
