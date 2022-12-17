import { v4 as uuid4 } from 'uuid';
import debug from 'debug';
import { createUserDto } from '../dto/user.dto';
import { Database } from '../service/Database';
import mysql from 'mysql';

const log: debug.IDebugger = debug('app:users-dao');


class UserDao {

    database: {
        connection: mysql.Connection;
    };

    constructor() {
        this.database = new Database();
    }
    async addUser(userFields: createUserDto) {

        let stmt = `INSERT INTO users(userID,firstName,lastName,email,password,education,filedOfInterest)
            VALUES(?,?)`;

        let user = [uuid4(), userFields.firstName, userFields.lastName, userFields.email, userFields.password,
        userFields.education, userFields.filedOfInterest];

        const result = this.database.connection.query(stmt, user, (err, result, filds) => {
            if (err) {
                log(err);
            }
            return result;
        })
        return result;
    }
}