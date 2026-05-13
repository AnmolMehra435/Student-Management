const express = require('express')
const studentController = require('../controllers/studentController')
const router = express.Router();


router.route('/addstudent')
    .post(studentController.addStudent)

router.route('/deletestudent')
    .post(studentController.deleteStudent)

router.route('/')
    .get(studentController.getStudent)

router.route('/getonestudent')
    .post(studentController.getOneStudent)

router.route('/editstudent')
    .post(studentController.editStudent)

module.exports = router;