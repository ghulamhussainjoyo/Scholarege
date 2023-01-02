import mysql from 'mysql2/promise';
import { dbConfig } from "../config";


class MySql2 {


    async createConnection() {
        const connection = await mysql.createConnection(dbConfig);
        return connection;

    }
}

export default new MySql2()