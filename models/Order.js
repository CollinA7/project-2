const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

// create our Post model
class Order extends Model {}
// create fields/columns for Post model
Order.init(
    {
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.CHAR,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customer',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'order',
    }
)

module.exports = Order
