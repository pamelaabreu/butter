const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const postRouter = require('./routes/posts');

// MIDDLEWARE NEEDED
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//ROUTES
app.use('/post', postRouter);



app.listen(port, () => {
    console.log('Butter API is running on Port: '+port);
  });