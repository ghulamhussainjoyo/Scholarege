import mysql from 'mysql';
import { dbConfig } from '../config';

class MysqlDatabase {

    dbConnection: mysql.Pool;
    constructor() {
        this.dbConnection = mysql.createPool(dbConfig);
        this.onDatabaseConnection();
    }

    onDatabaseConnection() {
        // Attempt to catch disconnects 
        this.dbConnection.on('connection', function (connection) {
            console.log('DB Connection established');

            connection.on('error', function (err: mysql.MysqlError) {
                console.error(new Date(), 'MySQL error', err.code);
            });
            connection.on('close', function (err: mysql.MysqlError) {
                console.error(new Date(), 'MySQL close', err);
            });

        });
    }
}

export default new MysqlDatabase();