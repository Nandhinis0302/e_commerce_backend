
const express = require('express');
const usercontroller = require('../controllers/usercontroller');
// const auth=require("../middlewares/auth");

const router = express.Router();
router.post('/signup',usercontroller.createuser);
router.post('/login',usercontroller.login);

module.exports = router;
