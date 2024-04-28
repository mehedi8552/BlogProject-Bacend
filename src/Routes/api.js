const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');
const AuthVerification = require('../Middlewares/AuthVerification');
const ProductController = require('../Controllers/ProductController');
const ProfileController = require('../Controllers/ProfileController');

//user rowter

router.get('/UserSignUp',UserController.SignUp);
router.post('/UserLogin',UserController.Login);
router.get('/UserLogOut',AuthVerification,UserController.UserLogOut);

//Blogger Profile 
router.get('/AllBloggerProfile',ProfileController.BloggerProfile);
router.get('/BloggerProfileByID/:id',ProfileController.BloggerProfileById);
router.get('/BloggerPostByID/:id',ProfileController.BloggerPostByID);
router.get('/RemoveBloggerByID/:id',ProfileController.RemoveBloggerByID);

//Product find
router.get('/LatestProduct',ProductController.LatestProduct);//For Slider
router.get('/ProducListByKeyword/:keyword',ProductController.ProducListByKeyword);
router.get('/ProducListByRemark/:remark',ProductController.ProducListByRemark);


//Manage Product
router.post('/CreateProduct',ProductController.CreateProduct);
router.post('/UpdateProduct/:ProductId',ProductController.UpdateProduct);
router.get('/ReadProduct',ProductController.ReadProduct);
router.post('/DeleteProduct/:ProductId',ProductController.DeleteProduct);

module.exports = router;
