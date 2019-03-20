const express = require('express');
const likeRouter = express.Router();
const LikeService = require('../services/likes');
const NotificationService = require('../services/notifications');

module.exports = likeRouter;