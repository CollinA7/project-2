const router = require('express').Router();
const { Order } = require('../../models');

router.get('/', (req, res) => {
  Order.findAll()
    .then((dbOrderData) => res.json(dbOrderData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  //create a order on a post//
  Order.create({
    order_id: req.body.order_id,
    name: req.body.name,
    user_id: req.session.user_id,
  })
    .then((dbOrderData) => res.json(dbOrderData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  //delete a order from a post
  Order.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbOrderData) => {
      if (!dbOrderData) {
        res.status(404).json({
          message: 'No order found with this id!',
        });
        return;
      }
      res.json(dbOrderData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
