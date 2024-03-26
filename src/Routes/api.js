const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController')
const AuthVerification = require('../Middlewares/AuthVerification')



//user rowter
router.post('/UserOTP',UserController.UserOTP);
router.post('/Login/:email',UserController.Login);
router.get('/VarifyOTP/:email/:otp',UserController.VarifyOTP);
router.get('/UserLogOut',AuthVerification,UserController.UserLogOut);




module.exports = router;