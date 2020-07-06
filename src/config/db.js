import dotenv from 'dotenv';
dotenv.config();
import Sequelize from 'sequelize';

/*
    Connection to the database
*/
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
});

/*
    Test the connection
*/
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.sync();
export default sequelize;