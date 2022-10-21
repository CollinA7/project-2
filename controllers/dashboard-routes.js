const router = require('express').Router()
const sequelize = require('../config/connection')
const { Order, User, Customer } = require('../models')
const withAuth = require('../utils/auth')

// get all posts for order handlebar
router.get('/', withAuth, (req, res) => {
    Customer.findAll({
        attributes: ['id', 'customer_name', 'customer_phone', 'created_at'],
        include: [
            {
                model: Order,
                attributes: ['order_id', 'order_name', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username'],
                },
            },
            {
                model: User,
                attributes: ['username'],
            },
        ],
    })
        .then((dbCustomerData) => {
            const customers = dbCustomerData.map((post) =>
                post.get({ plain: true })
            )
            res.render('dashboard', { customers, loggedIn: true })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router
