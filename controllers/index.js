const router = require('express').Router()

const apiRoutes = require('./api')
const homeRoutes = require('./home-routes.js')
const orderRoutes = require('./order-routes.js')

router.use('/', homeRoutes)
router.use('/api', apiRoutes)
router.use('/order', orderRoutes)

module.exports = router
