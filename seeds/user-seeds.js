const { User } = require('../models');

const userData = [
    {
        username: 'waiter1',
        password: 'waiter1',
        email: 'waiter1@restaurant.com'
    },
    {
        username: 'waiter2',
        password: 'waiter2',
        email: 'waiter2@restaurant.com'
    },
    {
        username: 'waiter3',
        password: 'waiter3',
        email: 'waiter3@restaurant.com'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUser;