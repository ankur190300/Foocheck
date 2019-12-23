const express= require('express');

const router = express.Router();
const homecontroller= require('../controllers/home_controllers');

router.get('/',homecontroller.home );
router.use('/workers', require('./workers'))

module.exports = router;