const express = require('express');
const { getItems, getItemDetails } = require('../controllers/itemsController');

const router = express.Router();

router.get('/api/items', getItems);
router.get('/api/items/:id', getItemDetails);


module.exports = router;
