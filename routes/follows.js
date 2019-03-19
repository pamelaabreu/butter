const express = require('express');
const followRouter = express.Router();
const FollowService = require('../services/follows');

// POST - CREATE 
followRouter.post('/', (req, res, next) => {
    const { user_follower_id, user_following_id } = req.body;
    const follower_id = parseInt(user_follower_id);
    const following_id = parseInt(user_following_id);
    
    FollowService.create(follower_id, following_id)
      .then(data => {
        res.json({success: `Created Follower id ${follower_id} and Following id ${following_id}.`});
      })
      .catch(err => {
        next(err);
      })
  });

module.exports = followRouter;