import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

const Entree = sequelize.define('Entree', {
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

export default Entree;
