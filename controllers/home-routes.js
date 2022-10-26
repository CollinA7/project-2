const router = require('express').Router();
const sequelize = require('sequelize');
const { User, Customer, Order } = require('../models');
const withAuth = require('../utils/helpers');

// get all customer for order handlebar
router.get('/', withAuth, (req, res) => {
  Customer.findAll({
    attributes: ['id', 'customer_name', 'customer_phone', 'created_at'],
    include: [
      {
        model: Order,
        attributes: ['order_id', 'name', 'customer_id'],
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
      const posts = dbCustomerData.map((post) => post.get({ plain: true }));
      res.render('homepage', { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router
  .get('/customer/:id', (req, res) => {
    Customer.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'customer_name', 'customer_phone', 'created_at'],
      include: [
        {
          model: Order,
          attributes: ['order_id', 'name', 'customer_id'],
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
    });
  })
  // .then((dbCustomerData) => {
  //   if (!dbCustomerData) {
  //     res.status(404).json({ message: 'No post found with this id' });
  //     return;
  //   }
  // });

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
