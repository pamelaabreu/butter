const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/users');

// POST - CREATE 
userRouter.post('/', (req, res, next) => {
    const { birthname, username, email, firebase_uid, profile_img, birthday, joining_reason } = req.body;

    UserService.create(birthname, username, email, firebase_uid, profile_img, birthday, joining_reason)
      .then(data => {
        res.json({success: `Created User with username ${username}.`});
      })
      .catch(err => {
        next(err);
      })
  });

// GET - READ 
userRouter.get('/:id/', (req, res, next) => {
    const {id} = req.params;
  
    UserService.read(id)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        next(err);
      })
  });

module.exports = userRouter;