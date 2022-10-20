const router = require('express').Router();
const sequelize = require('sequelize');
const { User } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
        
    });
});

module.exports = router;