import { v4 as uuid4 } from 'uuid';
import 'reflect-metadata'
import debug from 'debug';
import express from 'express';
import { createUserDto } from '../dto/user.dto';
import { Database } from '../service/Database';
import mysql from 'mysql';
import { AppDataSource } from '../../../scholarege/src/data-source';
import { User } from '../../../scholarege/src/entity/User';
const log: debug.IDebugger = debug('app:users-dao');



export function createUser() {
    AppDataSource.initialize().then(async () => {
        const user = await AppDataSource.getRepository(User);
        user.create({
            firstName: "Ghulam",
            lastName: "Hussain",
            age: 22,
        })
    })
}

export function getUser(req: express.Request, res: express.Response) {
    AppDataSource.initialize().then(async () => {
        const userRepo = await AppDataSource.getRepository(User);
        const user = userRepo.find()
        return res.status(200).json(user);
    })
}
