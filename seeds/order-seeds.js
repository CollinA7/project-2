const { Order } = require('../models')

const orderData = [
    {
        order_id: 1,
        name: 'Cheeseburger Combo',
    },
    {
        order_id: 2,
        name: 'Chicken Strips Combo',
    },
    {
        order_id: 3,
        name: 'Kids Meal',
    },
]

const seedOrder = () => Order.bulkCreate(orderData)

module.exports = seedOrder
