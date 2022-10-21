const router = require('express').Router()
const { Customer } = require('../../models')
const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
    //get all customers
    Customer.findAll()
        .then((dbCustomerData) => res.json(dbCustomerData))
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.post('/', withAuth, (req, res) => {
    //create a customer on a post
    Customer.create({
        customer_name: req.body.customer_name,
        order_id: req.body.order_id,
        customer_phone: req.body.customer_phone,
        user_id: req.session.user_id,
    })
        .then((dbCustomerData) => res.json(dbCustomerData))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        })
})

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
                })
                return
            }
            res.json(dbCustomerData)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router
