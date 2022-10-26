// users orders customers
const sequelize = require('../config/connection');
const seedOrders = require('./order-seeds');
const seedCustomers = require('./customer-seeds');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedOrders();
  console.log('\n----- ORDERS SEEDED -----\n');
  await seedCustomers();
  console.log('\n----- CUSTOMERS SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
