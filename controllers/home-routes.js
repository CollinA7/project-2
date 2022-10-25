/* eslint-disable no-unused-vars */
// eslint-disable-next-line new-cap
const router = require('express').Router();
const sequelize = require('sequelize');
// eslint-disable-next-line object-curly-spacing
const { User } = require('../models');
const withAuth = require('../utils/helpers');

router.get('/', (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
  } catch {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/dashboard', (req, res) => {
  try {
    res.render('dashboard', {
      loggedIn: req.session.loggedIn,
    });
  } catch {
    console.log(err);
    req.status(404).json(err);
  }
});

module.exports = router;
