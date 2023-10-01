import { Sequelize } from "sequelize-typescript";
import { config } from '../config';

const seql = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
    dialect: 'mysql',
    host: config.DB_HOST,
    logging: false,
})

export default seql;