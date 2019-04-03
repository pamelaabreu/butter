const express = require('express');
const loginRouter = express.Router();
// const LoginService = require('../services/tags');

// GET - READ 
loginRouter.get('/:id/', (req, res, next) => {
    const {id} = req.params;
  
//     LoginService.read(id)
//       .then(data => {
    // res.status(200);
//         res.json(data);
//       })
//       .catch(err => {
//         next(err);
//       })
  });

module.exports = loginRouter;