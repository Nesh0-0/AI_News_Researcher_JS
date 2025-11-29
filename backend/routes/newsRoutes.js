const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');



router.post('/generate_news', newsController.generateNews);

module.exports = router;