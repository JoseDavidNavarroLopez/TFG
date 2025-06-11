const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversationController');


router.get('/:userId', conversationController.getConversacionesPorUsuario);

module.exports = router;

