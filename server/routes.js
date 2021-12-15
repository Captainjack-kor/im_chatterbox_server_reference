const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/messages', controllers.getMessageController);
router.post('/messages', controllers.postMessageController);

module.exports = router;
