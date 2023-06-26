const express = require('express');
const router = express.Router();
const optionController = require('../controller/option_controller');

router.post('/create/:id', optionController.create);
router.get('/delete/:id', optionController.delete);
router.get('/vote/:id', optionController.vote);

module.exports = router;