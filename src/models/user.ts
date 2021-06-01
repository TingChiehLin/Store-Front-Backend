import Client from '../database';
import bcrypt from 'bcrypt';

export type User = {
    id: string,
    firstName: string,
    lastName: string,
    password: string
}

const getRounds = parseInt(process.env.SALT_ROUNDS || '');
const saltRounds = Number.isInteger(getRounds) ? getRounds : 10;
const pepper = process.env.BCRYPT_PASSWORD;

export class UserList {
    async create(u: User): Promise<User> {
        try {
            const conn = await Client.connect()
            const sql = 'INSERT INTO users (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *'

            const hash = bcrypt.hashSync(
                u.password + pepper,
                saltRounds
            );

            const result = await conn.query(sql, [u.firstName, u.lastName, hash])
            const user = result.rows[0]

            conn.release()

            return user
        } catch (err) {
            throw new Error(`unable create user (${u.firstName} ${u.lastName}): ${err}`)
        }
    }

    async authenticate(username: string, password: string): Promise<User | null> {
        const conn = await Client.connect()
        const sql = 'SELECT password_digest FROM users WHERE username=($1)'

        const result = await conn.query(sql, [username])

        console.log(password + pepper)

        if (result.rows.length) {

            const user = result.rows[0]

            console.log(user)

            if (bcrypt.compareSync(password + pepper, user.password_digest)) {
                return user
            }
        }

        return null
    }

}
