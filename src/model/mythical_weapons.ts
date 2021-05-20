import Client from '../database';

export type Weapon = {
    id: Number,
    name: string,
    type: string,
    weight: number
}

export class MythicalWeapons {
    async index(): Promise<Weapon[]> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM mythical_weapons'
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        }
        catch (err) {
            throw new Error(`Cannot not get weapon ${err}`);
        }
    }
}
