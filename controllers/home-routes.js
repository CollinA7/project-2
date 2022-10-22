const router = require('express').Router();
const { application } = require('express');
const sequelize = require('sequelize');
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('login', {
  });
});


module.exports = router;

