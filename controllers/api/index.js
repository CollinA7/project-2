const router = require('express').Router()

const userRoutes = require('./user-routes.js')
const customerRoutes = require('./customer-routes.js')

router.use('/users', userRoutes)
router.use('/cutomers', customerRoutes)

module.exports = router
