import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize/types";
import { dbConfig } from '../config';

const seql = new Sequelize(dbConfig.DB_NAME, dbConfig.DB_USER, dbConfig.DB_PASS, {
    dialect: dbConfig.DB_TYPE as Dialect,
    host: dbConfig.DB_HOST,
    logging: false,
    models: [__dirname + '/../models']
})

export default seql;