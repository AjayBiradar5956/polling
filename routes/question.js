const express = require('express');
const router = express.Router();
const questionController = require('../controller/question_controller');

router.post('/create', questionController.createQue);
router.get('/delete/:id', questionController.deleteQue);
router.get('/view/:id', questionController.viewQue);
router.post('/:id/option/create', questionController.createOpt);

module.exports = router;