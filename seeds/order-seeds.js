const { Order } = require('../models');

const orderData = [
    {
        order_id: 1,
        name: 'Cheeseburger Combo',
        customer_id: 2,
        user_id: 2
    },
    {
        order_id: 2,
        name: 'Chicken Strips Combo',
        customer_id: 3,
        user_id: 1
    },
    {
        order_id: 3,
        name: 'Kids Meal',
        customer_id: 4,
        user_id: 4
    }
]

const seedOrder = () => Order.bulkCreate(orderData);

module.exports = seedOrder;