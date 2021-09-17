var db = require('../config/db');
var logger = require('../config/logger');

function select_Checklist() {
    return new Promise ((resolve, reject) => {
        db.query(`select * from CheckList`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [CheckList]"+
                    "\n \t" + `select * from CheckList`+
                    "\n \t" + err);
                reject('DB ERR');
                //throw error;
            }
            else {
                resolve(db_data);
            }
        });
    })
};

function update_UserChecklist(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`UPDATE Worker SET wIsCheck= '${parameters.wischeck}' where wid = '${parameters.wid}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [CheckList]"+
                    "\n \t" + `UPDATE Worker SET wIsCheck= '${parameters.wischeck}' where wid = '${parameters.wid}'`+
                    "\n \t" + err);
                reject('DB ERR');
                //throw error;
            }
            else {
                console.log("확인용/ "+ db_data)
                resolve(db_data);
            }
        });
    })
};


function insert_Checklist(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`INSERT INTO CheckList SET cList = '${parameters.cList}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [CheckList]"+
                    "\n \t" + `INSERT INTO CheckList SET cList = '${parameters.cList}'`+
                    "\n \t" + err);
                reject('DB ERR');
                //throw error;
            }
            else {
                resolve(db_data);
            }
        });
    })
};


function delete_Checklist(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`DELETE CheckList WHERE cid = '${parameters.cid}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [CheckList]"+
                    "\n \t" + `INSERT INTO CheckList SET cList = '${parameters.cList}'`+
                    "\n \t" + err);
                reject('DB ERR');
                //throw error;
            }
            else {
                resolve(db_data);
            }
        });
    })
};

function select_accident() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT * FROM Accident`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Accident]"+
                    "\n \t" + `SELECT * FROM Accident`+
                    "\n \t" + err);
                reject('DB ERR');
                //throw error;
            }
            else {
                resolve(db_data);
            }
        });
    })
};

function select_anNotice() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT * FROM AdminNotice`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [AdminNotice]"+
                    "\n \t" + `SELECT * FROM AdminNotice`+
                    "\n \t" + err);
                reject('DB ERR');
                //throw error;
            }
            else {
                resolve(db_data);
            }
        });
    })
};

function select_anNoticeDetail(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT * FROM AdminNotice WHERE anid= '${parameters.anid}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [AdminNotice]"+
                    "\n \t" + `SELECT * FROM AdminNotice anid= '${parameters.anid}'`+
                    "\n \t" + err);
                reject('DB ERR');
                //throw error;
            }
            else {
                resolve(db_data);
            }
        });
    })
};

function select_accidentCount() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT if(aKind IS NULL, "total", aKind) AS kind, COUNT(aKind) AS count FROM Accident GROUP BY aKind WITH ROLLUP`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Accident]"+
                    "\n \t" + `SELECT if(aKind IS NULL, "total", aKind) AS kind, COUNT(aKind) AS count FROM Accident GROUP BY aKind WITH ROLLUP'`+
                    "\n \t" + err);
                reject('DB ERR');
                //throw error;
            }
            else {
                resolve(db_data);
            }
        });
    })
};
function select_accidentDateCount() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT * FROM(select DATE_FORMAT(aa.temp_date, '%Y-%m') date, COUNT(c.aDate) AS cnt FROM temp_date aa 
        LEFT JOIN Accident c ON (c.aDate = aa.temp_date) GROUP BY date) a WHERE date LIKE CONCAT('%',DATE_FORMAT(NOW(),'%Y'),'%')`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Accident]"+
                    "\n \t" + `SELECT *	FROM(select DATE_FORMAT(aa.temp_date, '%Y-%m') date, COUNT(c.aDate) AS cnt FROM temp_date aa 
                    LEFT JOIN Accident c ON (c.aDate = aa.temp_date) GROUP BY date) a WHERE date LIKE CONCAT('%',DATE_FORMAT(NOW(),'%Y'),'%')
                    '`+
                    "\n \t" + err);
                reject('DB ERR');
                //throw error;
            }
            else {
                resolve(db_data);
            }
        });
    })
};

module.exports = {
    select_Checklist,
    insert_Checklist,
    delete_Checklist,
    select_accident,
    update_UserChecklist,
    select_anNotice,
    select_anNoticeDetail,
    select_accidentCount,
    select_accidentDateCount                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
}