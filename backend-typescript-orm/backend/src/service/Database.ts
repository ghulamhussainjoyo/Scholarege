import { dbConfig } from './config';
import mysql from 'mysql';

export class Database {

    connection: mysql.Connection;
    constructor() {
        this.connection = mysql.createConnection(dbConfig);
        // this.createArticleTable();
        // this.createCommetTable();
        // this.createUserTable();
    }

    // Create Table Article
    createArticleTable() {
        let createArticle = `create table if not exists Articles(
                          articleID varchar(255),
                          heading varchar(255) not null,
                          description varchar(255) not null,
                          region varchar(255) not null,
                          article varchar(255) not null,
                          PRIMARY KEY (articleID)
                      )`;


        this.connection.query(createArticle, function (err, results, fileds) {
            console.log(err)
            console.log(results)
            console.log(fileds)
        })

        this.connection.end((err) => {
            console.log(err);
        })

    }

    // Create Table Comment
    createCommetTable() {

        let createComment = `CREATE TABLE if not exists Comments(
                          commentID varchar(255),
                          comment varchar(255) not null,
                          parent_comment_id int not null,
                          userID varchar(255),
                          articleID varchar(255),
                          PRIMARY KEY (commentID),
                          FOREIGN KEY (userID) REFERENCES Users(userID),
                          FOREIGN KEY (articleID) REFERENCES Articles(articleID)
                      )`;


        this.connection.query(createComment, function (err, results, fileds) {
            console.log(err)
            console.log(results)
            console.log(fileds)
        })

        this.connection.end((err) => {
            console.log(err);
        })
    }

    // Create Table User 
    createUserTable() {

        let createUser = `CREATE TABLE if not exists Users(
                          userID varchar(255),
                          firstName varchar(255) not null,
                          lastName varchar(255) not null,
                          email varchar(255),
                          password varchar(255),
                          education varchar(255),
                          filedOfInterest varchar(255),
                          PRIMARY KEY (userID)
                      )`;


        this.connection.query(createUser, function (err, results, fileds) {
            console.log(err)
            console.log(results)
            console.log(fileds)
        })

        this.connection.end((err) => {
            console.log(err);
        })
    }


}