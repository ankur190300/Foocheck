const express= require('express');
const passport = require('passport');
const router = express.Router();
const workercontroller= require('../controllers/worker_controller');


router.get('/home',workercontroller.home );

router.get('/profile',passport.checkAuthentication,workercontroller.profile);

router.get('/sign-in',workercontroller.sign_in);

router.get('/sign-up', workercontroller.sign_up);

router.post('/create',workercontroller.create);

router.post('/create-session',passport.authenticate('local', {failureRedirect:"/"}),workercontroller.create_session);

router.get('/destroy-session', workercontroller.destroy_session);

module.exports = router;