const express = require('express');
const { addChat, getChat } = require('../controllers/chatcontroller');
const router = express.Router();

router.post('/add', addChat);
router.get('/', getChat);

module.exports = router;