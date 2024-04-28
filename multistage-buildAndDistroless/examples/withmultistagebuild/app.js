const express = require('express');

const app = express();
const port = 8081; // You can change this to any port you want

app.get('/', (req, res) => {
  res.send('Hello, world from nodejs app with-- multistage docker build!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
