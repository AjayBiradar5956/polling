const express = require('express');
const router = express.Router();
const homeController = require("../controller/home_controller");

router.get('/', homeController.home);
router.use('/question', require('./question'));
router.use('/option', require('./option'));

module.exports = router;