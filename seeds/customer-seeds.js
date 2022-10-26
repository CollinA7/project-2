const { Customer } = require('../models');

const customerData = [
  {
    id: 1,
    customer_name: 'Trae',
    customer_phone: 2105551234,
  },
  {
    id: 2,
    customer_name: 'Tom',
    customer_phone: 2105554321,
  },
  {
    id: 3,
    customer_name: 'Racquel',
    customer_phone: 2105555678,
  },
  {
    id: 4,
    customer_name: 'Collin',
    customer_phone: 2105558765,
  },
];

const seedCustomers = () => Customer.bulkCreate(customerData);

module.exports = seedCustomers;
