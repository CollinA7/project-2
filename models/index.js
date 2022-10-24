const Order = require('./Order')
const Customer = require('./Customer')
const User = require('./User')

User.hasMany(Customer, {
    foreignKey: 'user_id',
})

User.belongsToMany(Customer, {
    through: Order,
    as: 'order_id',
    foreignKey: 'user_id',
})

Customer.belongsToMany(User, {
    through: Order,
    as: 'order_id',
    foreignKey: 'customer_id',
})

Customer.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Order, { foreignKey: 'user_id' })

Customer.hasOne(Order, {
    foreignKey: 'customer_id',
})

Order.belongsTo(User, { foreignKey: 'user_id' })

Order.belongsTo(Customer, { foreignKey: 'customer_id' })

// Order.belongsTo(Customer, {
//     foreignKey: 'order_id'
// })
 
// Customer.hasMany(Order, {
//     foreignKey: 'order_id'
// })

module.exports = { User, Order, Customer }
