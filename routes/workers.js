const express= require('express');

const router = express.Router();
const workercontroller= require('../controllers/worker_controller');


router.get('/home',workercontroller.home );
router.get('/profile',workercontroller.profile);

module.exports = router;