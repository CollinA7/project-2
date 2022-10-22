const { Customer } = require('../models');

const customerData = [
  {
    id: 1,
    customer_name: 'Trae',
    customer_phone: 2105551234,
    user_id: 1
  },
  {
    id: 2,
    customer_name: 'Tom',
    customer_phone: 2105554321,
    user_id: 2
  },
  {
    id: 3,
    customer_name: 'Racquel',
    customer_phone: 2105555678,
    user_id: 3
  },
  {
    id: 4,
    customer_name: 'Collin',
    customer_phone: 2105558765,
    user_id: 4
  },
];

const seedCustomers = () => Customer.bulkCreate(customerData);

module.exports = seedCustomers;