import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

const SandwichHot = sequelize.define('SandwichHot', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
});

export default SandwichHot;
