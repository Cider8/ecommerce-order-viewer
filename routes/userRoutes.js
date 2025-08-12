const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
  const search = req.query.search || '';
  const users = await User.find({ name: { $regex: search, $options: 'i' } });
  res.json(users);
});
module.exports=router