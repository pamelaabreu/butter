const express = require('express');
const postRouter = express.Router();
const PostService = require('../services/posts');

// POST - CREATE 
postRouter.post('/', (req, res, next) => {
    const { user_posted_id, tag_id, content_url, title, summary, caption } = req.body;
  
    PostService.create(user_posted_id, tag_id, content_url, title, summary, caption)
      .then(() => {
        res.json({success: `Created Post with title ${title}.`});
      })
      .catch(err => {
        next(err);
      })
  });

// GET - READ 
postRouter.get('/:id/', (req, res, next) => {
    const {id} = req.params;
  
    PostService.read(id)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        next(err);
      })
  });

module.exports = postRouter;