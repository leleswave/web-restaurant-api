import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';

const Sandwich = sequelize.define('Sandwich', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    halfPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    fullPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
});

export default Sandwich;
