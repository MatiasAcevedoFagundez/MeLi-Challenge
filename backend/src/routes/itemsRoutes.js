const express = require('express');
const { searchItems } = require('../controllers/itemsController');

const router = express.Router();

router.get('/api/items', searchItems);

module.exports = router;
