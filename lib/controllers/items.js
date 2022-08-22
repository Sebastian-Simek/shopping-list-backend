const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Item = require('../models/Item');

module.exports = Router()
  .post('/', authenticate, async (req, res, next) => {
    try {
      const newPost = await Item.insert({ ...req.body, user_id: req.user.id });
      res.json(newPost);
    } catch (e) {
      next(e);
    }
  });


