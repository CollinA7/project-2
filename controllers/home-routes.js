/* eslint-disable no-unused-vars */
// eslint-disable-next-line new-cap
const router = require('express').Router();
const sequelize = require('sequelize');
// eslint-disable-next-line object-curly-spacing
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('homepage', {

  });
});

module.exports = router;
