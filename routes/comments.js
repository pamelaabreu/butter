const express = require('express');
const commentRouter = express.Router();
const CommentService = require('../services/comments');
const NotificationService = require('../services/notifications');

module.exports = commentRouter;