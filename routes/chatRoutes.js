const express = require('express');
const router = express.Router();
const { responderChat } = require('../controllers/chatController');

router.post('/', responderChat);

module.exports = router;
