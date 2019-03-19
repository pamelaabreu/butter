const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => {
    console.log('Butter API is running on Port: '+port);
  });