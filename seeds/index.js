// users orders customers
const seedUsers = require('./user-seeds');
const seedOrders = require('./orders-seeds');
const seedCustomers = require('./customer-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({force: true});
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedOrders();
  console.log('\n----- ORDERS SEEDED -----\n');
  await seedCustomers();
  console.log('\n----- CUSTOMERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
