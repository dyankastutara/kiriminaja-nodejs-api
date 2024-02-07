const express = require('express');
const router = express.Router();

const controller = require('../controllers/callback');

router.post('/set', controller.set);
router.post('/webhook', controller.webhook);

module.exports = router;
