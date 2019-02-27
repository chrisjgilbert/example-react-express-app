const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const gigs = {
  "venue": "brixton academy",
  "date": "01/01/2000"
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello from express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(gigs);
});

app.listen(port, () => console.log(`Listening on port ${port}`));