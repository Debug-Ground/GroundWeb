var express = require('express');
var router = express.Router();
var noticeController = require('../controller/noticeController')

/* GET home page. */

router.get('/android', noticeController.androidNotice);

router.post('/androidResult',noticeController.androidResult);

// -----------------------------------------------android notice

// notice_write
router.get('/write', noticeController.nwrite);
router.post('/insertData', noticeController.insertData);
//notice delete
router.post('/delete', noticeController.ndelete);
// notice_detail
router.get('/detail/:num', noticeController.ndetail);
// notice_update
router.get('/update/:num', noticeController.nupdate);
router.post('/updateData', noticeController.updateData);
// notice
router.get('/:num', noticeController.notice);


module.exports = router;
