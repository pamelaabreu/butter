const express = require('express');
const followRouter = express.Router();
const FollowService = require('../services/follows');
const NotificationService = require('../services/notifications');

// POST - CREATE 
followRouter.post('/', (req, res, next) => {
    const { user_follower_id, user_following_id } = req.body;
    const follower_id = parseInt(user_follower_id);
    const following_id = parseInt(user_following_id);
    
    FollowService.create(follower_id, following_id)
      .then(data => {
        return NotificationService.create(follower_id, following_id, 'followed', data.id, null, null)
      })
      .then(data => {
        res.json({success: `Created Follower id ${follower_id} and Following id ${following_id}.`});
      })
      .catch(err => {
        next(err);
      })
  });

// GET - READ 
followRouter.get('/:id/', (req, res, next) => {
    const {id} = req.params;
  
    FollowService.read(id)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        next(err);
      })
  });

module.exports = followRouter;