import sequelize from '../config/db';
import Sequelize from 'sequelize';

/*
    Define timesheet model of the db
*/
const Timesheet = sequelize.define('timesheet', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    workerId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    clockInTime: {
        type: Sequelize.DATE
    },
    clockOutTime: {
        type: Sequelize.DATE
    },

}, {
    timestamps: false,
    freezeTableName: true
});

export default Timesheet;