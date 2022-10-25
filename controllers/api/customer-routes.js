const router = require('express').Router();
const { Customer, Order, User } = require('../../models');
const withAuth = require('../../utils/helpers');

router.get('/', withAuth, (req, res) => {
  Customer.findAll({
    attributes: ['id', 'customer_name', 'customer_phone', 'created_at'],
    include: [
      {
        model: Order,
        attributes: ['order_id', 'name'],
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
    .then((dbCustomerData) => res.json(dbCustomerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  //create a customer on a post
  Customer.create({
    customer_name: req.body.customer_name,
    order_id: req.body.order_id,
    order_name: req.body.order_name,
    customer_phone: req.body.customer_phone,
  })
    .then((dbCustomerData) => res.json(dbCustomerData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  //delete a customer from a post
  Customer.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCustomerData) => {
      if (!dbCustomerData) {
        res.status(404).json({
          message: 'No customer found with this id!',
        });
        return;
      }
      res.json(dbCustomerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
