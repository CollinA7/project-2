/* eslint-disable no-unused-vars */
// eslint-disable-next-line new-cap
const router = require('express').Router();
const sequelize = require('sequelize');
// eslint-disable-next-line object-curly-spacing
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  res.render('homepage', {
    
  });
});

router.get('/login', (req,res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
