/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
import * as process from 'process';
import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { Knex } from "knex";
import shortid from 'shortid';

const tableName = 'users';
const defaultPassword = process.env.DEFAULT_PASSWORD as string;

exports.seed = async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    const hashedPassword: string = await bcrypt.hash(defaultPassword, 10);

    const users = Array(10)
        .fill(null)
        .map((_, i) => ({
            id: shortid(10),
            fullname: faker.person.fullName(),
            nik: Number(`${12345678 + i}`),
            phone: Number(`${12345678 + i}`),
            address: faker.person.bio(),
            role: 'user',
        }));

    await knex(tableName).insert(users.map((user) => ({
        ...user, password: hashedPassword
    })))
};
