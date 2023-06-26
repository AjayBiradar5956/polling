const express = require('express');
const router = express.Router();
const questionController = require('../controller/question_controller');

router.post('/create', questionController.createQue);
router.get('/delete/:id', questionController.deleteQue);
router.get('/view/:id', questionController.viewQue);

module.exports = router;