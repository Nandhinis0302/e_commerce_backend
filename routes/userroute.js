
const express = require('express');
const usercontroller = require('../controllers/usercontroller');
// const auth=require("../middlewares/auth");

const router = express.Router();
router.post('/',usercontroller.createuser);
router.get('/',usercontroller.login);

module.exports = router;
