const express =require('express')
const ordercontroller =require('../controllers/ordercontroller')
const auth = require('../middlewares/auth')

const router =express.Router()
router.post('/',auth,ordercontroller.createorder)

module.exports = router;