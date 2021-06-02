import express, {Request, Response} from "express";
import {Product, ProductList} from "../models/product";

const store = new ProductList();

const index = async (_req: Request, res: Response) => {
    const products = await store.index()
    res.json(products)
}

const product_list_routes = (app: express.Application) => {

    app.get('/products', (_req: Request, res: Response) => {
        try {
            res.send('this is the INDEX route')
        } catch (err) {
            res.status(400)
            res.json(err)
        }
    })

    app.get('/products/:id', (_req: Request, res: Response) => {
        try {
            res.send('this is the SHOW route')
        } catch (err) {
            res.status(400)
            res.json(err)
        }
    })

    app.post('/products', (req: Request, res: Response) => {
        const article: Product = {
            id: req.params.id,
            name_product: req.body.title,
            price: req.body.price,
            category: req.body.category
        }
        try {
            res.send('this is the CREATE route')
        } catch (err) {
            res.status(400)
            res.json(err)
        }
    })

    app.put('/products/:id', (req: Request, res: Response) => {
        const product: Product = {
            id: req.params.id,
            name_product: req.body.title,
            price: req.body.price,
            category: req.body.category
        }
        try {
            res.send('this is the EDIT route')
        } catch (err) {
            res.status(400)
            res.json(err)
        }
    })

    app.delete('/products/:id', (_req: Request, res: Response) => {
        try {
            res.send('this is the DELETE route')
        } catch (err) {
            res.status(400)
            res.json(err)
        }
    })
}

export default product_list_routes
