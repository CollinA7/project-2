/* eslint-disable no-unused-vars */
// eslint-disable-next-line new-cap
const router = require('express').Router();
const sequelize = require('sequelize');
// eslint-disable-next-line object-curly-spacing
const { User } = require('../models');
const withAuth = require('../utils/helpers');

router.get('/', withAuth, (req, res) => {

  try {
    res.render('homepage', {
    loggedIn: req.session.loggedIn
  });
  } catch {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req,res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
