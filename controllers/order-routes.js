const router = require('express').Router()
const sequelize = require('../config/connection')
const { Order, User, Customer } = require('../models')
const withAuth = require('../utils/auth')

// get all posts for order handlebar
router.get('/', withAuth, (req, res) => {
    Customer.findAll({
        attributes: ['id', 'customer_name', 'customer_phone'],
        include: [
            {
                model: User,
                attributes: ['username'],
                include: {
                    model: Order,
                    attributes: ['id'],
                },
            },
        ],
    })
        .then((dbPostData) => {
            const posts = dbPostData.map((post) => post.get({ plain: true }))
            res.render('order', { posts, loggedIn: true })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router
