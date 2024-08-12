const express = require('express');
const cartcontroller = require('../controllers/cartcontroller');
const auth = require('../middlewares/auth');

const router = express.Router();
router.post('/', auth, cartcontroller.createcart);
router.get('/', auth, cartcontroller.getcart);
router.delete('/:product_id', auth, cartcontroller.deletecart);
module.exports = router;