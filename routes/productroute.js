
const express = require('express');
const Productcontroller = require('../controllers/productcontroller');
const auth=require("../middlewares/auth")
const router = express.Router();

router.get('/',Productcontroller.getProducts);
router.post('/',auth,Productcontroller.createProduct);
// router.delete('/',Productcontroller.deleteProduct);

module.exports = router;
