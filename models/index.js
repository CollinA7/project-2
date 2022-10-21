const Customer = require('./Customer')
const Order = require('./Order')
const User = require('./User')

User.hasMany(Customer, {
    foreignKey: 'user_username',
})

User.hasMany(Order, {
    foreignKey: 'user_username',
})

module.exports = { User, Order, Customer }
