const Customer = require('./Customer')
const User = require('./User')
const Order = require('./Order')

User.hasMany(Customer, {
    foreignKey: 'user_id',
})

User.belongsToMany(Customer, {
    through: Order,
    as: 'order_post',
    foreignKey: 'user_id',
})

Customer.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Order, { foreignKey: 'user_id' })

Order.belongsTo(User, { foreignKey: 'user_id' })

Order.belongsTo(Customer, { foreignKey: 'customer_id' })

module.exports = { User, Order, Customer }
