import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize/types";
import { config } from '../config';

const seql = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
    dialect: config.DB_TYPE as Dialect,
    host: config.DB_HOST,
    logging: false,
})

export default seql;