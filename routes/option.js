const express = require('express');
const router = express.Router();
const optionController = require('../controller/option_controller');

router.get('/delete/:id', optionController.delete);
router.get('/vote/:id', optionController.vote);

module.exports = router;