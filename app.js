const express = require('express');
const app = express();
const port = 3007;

app.get('/helloworld', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});