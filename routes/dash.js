var express = require('express');
var router = express.Router();
var dashController = require('../controller/dashController')
const upload = require('../middleware/multer');
/* GET home page. */
router.get('/', dashController.dash_main);

//checklist select insert delete
router.get('/checklist', dashController.dash_checklist);
router.post('/insertCheck', dashController.dash_checklistInsert);
router.delete('/deleteCheck',dashController.dash_checklistDelete);
router.post('/updateUserCheck',dashController.dash_userchecklistUpdate);

//accideent
router.get('/accident/:num', dashController.dash_accident);
router.get('/accident_add', dashController.dash_accident_add);
router.post('/accident_insert', upload.single('file'),dashController.dash_accident_insert)
router.get('/accident_update/:num',dashController.dash_accident_update)
router.post('/accident_update',dashController.dash_accident_updatedata)
router.get('/accident_detail/:num', dashController.dash_accident_detail);
router.post('/accident_delete', dashController.dash_accident_delete);
//cctv
router.get('/cctv',dashController.dash_cctv);
//manpower
router.get('/manpower/:num',dashController.dash_manpower);
router.get('/manpower_update/:num',dashController.dash_manpower_update);
router.post('/manpower_update',upload.single('file'),dashController.dash_manpower_updatedata)
router.get('/manpower_detail/:num',dashController.dash_manpower_detail);
router.post('/manpower_delete', dashController.dash_manpower_delete);

//notice
router.get('/notice/:num',dashController.dash_notice);
router.get('/noticeWrite',dashController.dash_notice_write);
router.post('/noticeInsert',dashController.dash_notice_insert);
router.get('/notice_update/:num',dashController.dash_notice_update);
router.post('/noticeUpdate',dashController.dash_notice_updatedata);
router.get('/noticeDetail/:num',dashController.dash_notice_detail);
router.post('/noticeDelete',dashController.dash_notice_delete);

//android notice
router.get('/AppnoticeDetail',dashController.dash_Appnotice_detail);
//timecare
router.get('/timecard/:num',dashController.dash_timecard);
//workchart
router.get('/work_chart/:num',dashController.dash_work);
router.get('/work_chart_add',dashController.dash_work_add);
router.get('/work_chart_update/:num',dashController.dash_work_update);
router.post('/work_update',dashController.dash_work_updatedata);
router.post('/work_insert',dashController.dash_work_insert);
router.get('/work_chart_detail/:num',dashController.dash_work_detail);
router.post('/work_chart_delete',dashController.dash_work_delete)
//
router.get('/worker_chart',dashController.dash_worker_chart);

router.post('/getWayWeather',dashController.getWayWeather);

router.get('/test',dashController.dash_test);
router.post('/test',dashController.dash_test_send);

router.post('/insertmaincheck',dashController.dash_insert_list);
router.post('/deletemaincheck',dashController.dash_delete_list);


//app
router.post('/reqAt',dashController.dash_reqApp_At);


module.exports = router;