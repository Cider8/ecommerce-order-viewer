const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/:orderId', async (req, res) => {
  const items = await Item.find({ orderId: req.params.orderId });
  res.json(items);
});
module.exports=router