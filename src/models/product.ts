import Client from '../database';

export type Product = {
    id: Number;
    name_product: string;
    price: Number;
    category: string;
}

export class ProductList {
    async index(): Promise<Product[]> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM products';
            const result = await conn.query(sql);
            conn.release()
            return result.rows
        } catch (err) {
            throw new Error(`Cannot get product ${err}`)
        }
    }

    async show(id: string): Promise<Product> {
        try {
            const sql = 'SELECT * FROM products WHERE id=($1)'
            // @ts-ignore
            const conn = await Client.connect()

            const result = await conn.query(sql, [id])

            conn.release()

            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find book ${id}. Error: ${err}`)
        }
    }

    async create(p: Product): Promise<Product> {
        try {
            const sql = 'INSERT INTO prodcuts (name_product, price, category) VALUES($1, $2, $3) RETURNING *'
            // @ts-ignore
            const conn = await Client.connect()

            const result = await conn
                .query(sql, [p.name_product, p.price, p.category])

            const product = result.rows[0]

            conn.release()

            return product
        } catch (err) {
            throw new Error(`Could not add new product ${p.name_product}. Error: ${err}`)
        }
    }

    async delete(id: string): Promise<Product> {
        try {
            const sql = 'DELETE FROM products WHERE id=($1)'
            // @ts-ignore
            const conn = await Client.connect()

            const result = await conn.query(sql, [id])

            const product = result.rows[0]

            conn.release()

            return product
        } catch (err) {
            throw new Error(`Could not delete product ${id}. Error: ${err}`)
        }
    }
}

