const router = require('express').Router();
const sequelize = require('sequelize');
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homepage', {
    });
});

module.exports = router;