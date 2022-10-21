const router = require('express').Router()
const sequelize = require('../config/connection')
const { Post, User, Comment } = require('../models')
const withAuth = require('../utils/auth')

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
    console.log(req.session)
    console.log('======================')
    Post.findAll({
        where: {
            username: req.session.username,
        },
        attributes: ['id', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['id', 'created_at'],
                include: {
                    model: Order,
                    attributes: ['id'],
                },
            },
            {
                model: Customer,
                attributes: ['name', 'phone'],
            },
        ],
    })
        .then((dbPostData) => {
            const posts = dbPostData.map((post) => post.get({ plain: true }))
            res.render('dashboard', { posts, loggedIn: true })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router
