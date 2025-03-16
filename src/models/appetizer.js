import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

const Appetizer = sequelize.define('Appetizer', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
});

export default Appetizer;
